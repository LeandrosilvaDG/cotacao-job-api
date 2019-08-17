const mongoose = require('mongoose')

const QuestionsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  answersAmount: {
    type: Number,
    required: true
  },
  options: {
    type: [{
      answer: {
        type: String,
        required: true
      },
      priceIncrement: {
        type: String
      }
    }]
  }
})

module.exports = mongoose.model('Questions', QuestionsSchema)
