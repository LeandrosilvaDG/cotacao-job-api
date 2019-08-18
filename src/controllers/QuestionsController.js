const Questions = require('../models/Questions')
const Answers = require('../models/Answers')
const Opportunity = require('../models/Opportunity')

module.exports = {
  async index (req, res) {
    try {
      const questions = await Questions.find().populate(['answers', 'opportunity'])

      return res.json({ questions })
    } catch (err) {
      return res.status(400).json({ log: 'Error request questions' })
    }
  },

  async show (req, res) {
    try {
      const question = await Questions.findById(req.params.questionId).populate('answers')

      return res.json({ question })
    } catch (err) {
      return res.status(400).json({ log: 'Request id question not found' })
    }
  },

  async store (req, res) {
    try {
      const { title, description, opportunity, answers } = req.body

      const question = await Questions.create({ title, description, opportunity })

      await Promise.all(answers.map(async answer => {
        const answerQuestion = new Answers({ ...answer, questions: question._id })

        await answerQuestion.save()

        question.answers.push(answerQuestion)
      }))

      const opp = await Opportunity.findById(opportunity)
      opp.questions.push(question._id)
      await Opportunity.findByIdAndUpdate(opportunity, { questions: opp.questions }, { new: true })

      await question.save()

      return res.json({ question })
    } catch (err) {
      return res.status(400).json({ log: 'Not create question item' })
    }
  },

  async update (req, res) {
    try {
      const { title, description, opportunity, answers } = req.body

      const question = await Questions.findByIdAndUpdate(req.params.questionId, {
        title,
        description
      }, { new: true })

      question.answers = []
      await Answers.remove({ question: question._id })

      await Promise.all(answers.map(async answer => {
        const answerQuestion = new Answers({ ...answer, questions: question._id, opportunity: opportunity })

        await answerQuestion.save()

        question.answers.push(answerQuestion)
      }))

      const opp = await Opportunity.findById(opportunity)
      opp.questions.push(question._id)
      await Opportunity.findByIdAndUpdate(opportunity, { questions: opp.questions }, { new: true })

      await question.save()

      return res.json({ question })
    } catch (err) {
      return res.status(400).json({ log: 'Not update question' })
    }
  },

  async delete (req, res) {
    try {
      const question = await Questions.findById(req.params.questionId).populate('answers')
      const { answers } = question

      if (question) {
        answers.map(async answer => {
          await Answers.findByIdAndRemove(answer._id)
        })

        await Questions.findByIdAndRemove(req.params.questionId)
      }

      return res.json({ status: 'ok' })
    } catch (err) {
      return res.status(400).json({ log: 'Not delete question' })
    }
  }
}
