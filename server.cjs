const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');


const app = express();
const PORT = 3001;
const MONGO_URI = 'mongodb+srv://usermaster:LAE4a17kei1VmPOY@cluster0.zhwrc7g.mongodb.net/';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// User Schema and Model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

const User = mongoose.model('Newzify', userSchema);

const articleSchema = new mongoose.Schema({
  source: {
    id: String,
    name: String,
  },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: Date,
  content: String,
  country: String,
  topic: String,
});

const Article = mongoose.model('Article', articleSchema);

app.get('/api/news', async (req, res) => {
  const { country, topic } = req.query;
  try {
    const query = {};
    if (country) query.country = country;
    if (topic && topic != "general") query.topic = topic;

    const articles = await Article.find(query).sort({ publishedAt: -1 }).limit(50);


    res.status(200).json({
      articles: articles || [],
      status: 'ok',
      message: "Artigos encontrados",
      totalResults: articles.length || 0
    });
  } catch (error) {
    console.error('Erro ao buscar artigos do MongoDB:', error.message);
    res.status(500).json({ error: 'Erro interno ao buscar notícias' });
  }
});


// Register new user
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Login user
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Simulate setting user session (for example purpose)
    res.json({ success: true, message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});




mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
