const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3004;

// Middleware
app.use(bodyParser.json());
app.use(cors(
    {
        origin: 'http://localhost:5173'
    }
));

// MySQL database connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'NewziFy'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Route for handling the root path
app.get('/', (req, res) => {
  res.send('Welcome to the API server');
});

// Route for handling login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Query to check user credentials
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }

    // Check if user exists and password matches
    if (result.length === 1) {
      // User exists and password matches
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      // User not found or password does not match
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
