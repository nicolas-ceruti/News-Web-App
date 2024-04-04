const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3003;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'NewziFy'
});
connection.connect();

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;

  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  connection.query(sql, [name, email, password], (error, results, fields) => {
    if (error) {
      console.error('Error registering user:', error);
      res.status(500).send('Error registering user');
      return;
    }
    res.status(201).send('User registered successfully');
  });
});

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
