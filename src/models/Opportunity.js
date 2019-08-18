const mongoose = require('mongoose')

const OpportunitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Questions'
  }],
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answers'
  }
})

module.exports = mongoose.model('Opportunity', OpportunitySchema)
