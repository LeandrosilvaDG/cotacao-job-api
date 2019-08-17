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
  answers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answers',
    require: true
  }]
})

module.exports = mongoose.model('Questions', QuestionsSchema)
