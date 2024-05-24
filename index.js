const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const net = require('net');
const nodemailer = require('nodemailer');

const app = express();
const port1 = 3001;
// const port2 = 3003;
// const port3 = 3001;

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'NewziFy'
});
db.connect();

const connection = mysql.createConnection(db.config);
connection.connect();

const server = net.createServer(socket => {
  // Handle client errors
  socket.on('clientError', (err) => {
    console.error('Client error:', err);
    // Destroy the socket
    socket.destroy(err);
  });

  // Other socket handling logic
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }

    if (result.length === 1) {
      const user = result[0];
      res.status(200).json({ success: true, message: 'Login successful', user });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  });
});

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

app.post('/subscribe', async (req, res) => {
  const { name, email } = req.body;
  try {
    await sendSubscriptionEmail(name, email);
    res.status(200).send('Subscription success!');
  } catch (error) {
    console.error('Error sending subscription email:', error);
    res.status(500).send('Subscription failed.');
  }
});

const sendSubscriptionEmail = async (name, email) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mangesh.07gsb@gmail.com',
      pass: 'exlq fadv enfl kszf'
    }
  });

  const mailOptions = {
    from: 'mangesh.07gsb@gmail.com',
    to: email,
    subject: 'Welcome To NewziFy',
    text: `Hi ${name}, Welcome to NewziFy!`
  };

  await transporter.sendMail(mailOptions);
};

app.listen(port1, () => {
  console.log(`Server 1 is running on http://localhost:${port1}`);
});

// app.listen(port2, () => {
//   console.log(`Server 2 is running on port ${port2}`);
// });

// app.listen(port3, () => {
//   console.log(`Server 3 is running on port ${port3}`);
// });
