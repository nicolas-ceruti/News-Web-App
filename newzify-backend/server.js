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
    subject: 'Welcome To NewziFy',
    text: `Hii ${name},\n\nWelcome aboard! 🎉\n\nThank you for subscribing to Newzify! 📰✨\n\nGet ready to embark on a journey of discovery, where every day brings fresh news and insights tailored just for you. Stay ahead of the curve with our curated content covering everything from breaking news to in-depth analysis, delivered straight to your inbox.\n\nWe're thrilled to have you join our community of curious minds, eager to explore the world around us.\n\nHappy reading!\n\nBest regards,\n NewziFy`,
  };
  

  await transporter.sendMail(mailOptions);
};

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
