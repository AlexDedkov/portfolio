// server.js

const express = require('express'); //Import express
const mongoose = require('mongoose'); //Import MongoDB module
const cors = require('cors'); //Import CORS
const Feedback = require('./models/Feedback'); // Import the Feedback model

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost:27017/Portfolio';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

  
  app.post('/api/feedback', async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      const feedback = new Feedback({ name, email, message });
      await feedback.save(); // Save the feedback data to MongoDB
  
      res.status(200).json({ message: 'Feedback received successfully!' });
    } catch (error) {
      console.error('Error saving feedback:', error);
      res.status(500).json({ message: 'Failed to save feedback' });
    }
  });
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  
