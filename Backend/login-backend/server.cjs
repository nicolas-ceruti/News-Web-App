const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express(); // Corrected parentheses
const port = 3004;

// Middleware
app.use(bodyParser.json()); // Corrected method name and removed extra space
app.use(cors({
  origin: 'http://localhost:5173' // Corrected curly braces and removed extra characters
}));

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
app.get('/', (req, res) => { // Corrected method name
  res.send('Welcome to the API server');
});

// Route for handling login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body; // Corrected object destructuring syntax
  
  // Query to check user credentials
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, result) => { // Corrected parameter and removed extra parentheses
    if (err) {
      console.error('Error querying database:', err); // Corrected method name
      return res.status(500).json({ success: false, message: 'Internal server error' }); // Corrected method name and removed extra characters
    }

    // Check if user exists and password matches
    if (result.length === 1) { // Corrected comparison operator
      // User exists and password matches
      const user = result[0];
      res.status(200).json({ success: true, message: 'Login successful', user }); // Corrected method name and removed extra characters
    } else {
      // User not found or password does not match
      res.status(401).json({ success: false, message: 'Invalid email or password' }); // Corrected method name and removed extra characters
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Corrected template string syntax
});
