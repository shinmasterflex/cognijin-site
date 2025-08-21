import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

// Parsers: support both JSON fetches and traditional forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'dist')));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schema & model
const contactSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// Handle contact form POST (single route!)
app.post('/contact', async (req, res) => {
  try {
    console.log('Received /contact POST body:', req.body);

    const { first_name, last_name, email, phone, message } = req.body;

    const newContact = new Contact({ first_name, last_name, email, phone, message });
    await newContact.save();

    console.log('Contact saved with _id:', newContact._id);
    // Ensure absolute path so it resolves under /
    res.redirect('/thank-you.html');
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).send('Something went wrong.');
  }
});

// Optional: serve a consultation page
app.get('/consultation', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'consultation.html'));
});

// Catch-all -> SPA index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
