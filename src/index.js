require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect(
  'mongodb+srv://jobcote:jobcote@cotacao-job-api-cxkbt.mongodb.net/test?retryWrites=true&w=majority',
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
)
mongoose.Promise = global.Promise

app.use(require('./routes/routes'))

app.listen(process.env.PORT || 3333)
