const mongoose = require('mongoose')

const AnswersSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  iconUrl: {
    type: String
  },
  priceIncrement: {
    type: String
  }
})

module.exports = mongoose.model('Answers', AnswersSchema)
