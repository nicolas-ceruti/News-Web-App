const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors({
  origin: 'http://localhost:5173' // Enable CORS for specific origin
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define a route for subscription
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

// Function to send subscription email
const sendSubscriptionEmail = async (name, email) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mangesh.07gsb@gmail.com', // Your Gmail address
      pass: 'exlq fadv enfl kszf' // Your Gmail app password
    }
  });

  const mailOptions = {
    from: 'mangesh.07gsb@gmail.com',
    to: email,
    subject: 'Welcome To NewziFy',
    text: `Hi ${name}, Welcome to NewziFy!` // Using template string
  };

  await transporter.sendMail(mailOptions);
};

// Define a route for root
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
