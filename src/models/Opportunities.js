const mongoose = require('mongoose')

const OpportunitiesSchema = new mongoose.Schema({
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
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    answers: [{
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
    }]
  }]

})

module.exports = mongoose.model('Opportunities', OpportunitiesSchema)
