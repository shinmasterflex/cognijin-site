const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 10000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mongoose Schema and Model
const contactSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);


// Middleware
app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle contact form POST
app.post('/contact', async (req, res) => {
  const { first_name, last_name, email, phone, message } = req.body;
  try {
    const newContact = new Contact({ first_name, last_name, email, phone, message });
    await newContact.save();
    res.redirect('thank-you.html');
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).send('Something went wrong.');
  }
});


// Serve index.html from dist for all unmatched routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});