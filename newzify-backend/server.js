const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors({
    origin: 'http://localhost:5173'
})); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
      user: 'mangesh.07gsb@gmail.com', // Your Gmail address
      pass: 'exlq fadv enfl kszf', // Your Gmail app password
    },
  });

  const mailOptions = {
    from: 'mangesh.07gsb@gmail.com', // Your Gmail address
    to: email,
    subject: 'Subscription Success',
    text: `Hi ${name},\n\nThank you for subscribing to Newzify!`,
  };

  await transporter.sendMail(mailOptions);
};

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
