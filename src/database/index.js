const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://jobcote:jobcote@cotacao-job-api-cxkbt.mongodb.net/test?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true
})
mongoose.Promise = global.Promise

module.exports = mongoose
