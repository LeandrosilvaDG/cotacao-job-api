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
  },
  questions: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Questions',
    required: true
  },
  opportunity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Opportunity',
    required: true
  }
})

module.exports = mongoose.model('Answers', AnswersSchema)
