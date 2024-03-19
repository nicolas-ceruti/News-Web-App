// server.js

import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
const port = 3003; // You can change the port if needed

// Middleware to parse JSON-encoded request bodies
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
})); // Enable CORS for all routes

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'NewziFy'
});

connection.connect();

// Endpoint to handle form submission
app.post('/api/register', (req, res) => {
    // Extract form data from request body
    const { name, email, password } = req.body;

    // Insert form data into MySQL database
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

// Route handler for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Server is running!'); // Respond with a simple message
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
