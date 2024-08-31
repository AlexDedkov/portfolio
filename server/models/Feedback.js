const mongoose = require('mongoose'); //Import Mongoose

//Create model for data from feedback form

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: Date().toString()
  }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
