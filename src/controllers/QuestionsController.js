const Questions = require('../models/Questions')

module.exports = {
  async index (req, res) {
    const questions = await Questions.find()
    return res.json({ user: req.userId, questions })
  },

  async show (req, res) {
    const { id } = req.params
    const question = await Questions.findOne(id)
    return res.json({ user: req.userId, question })
  },

  async store (req, res) {
    const question = await Questions.create(req.body)
    return res.json({ user: req.userId, question })
  },

  async update (req, res) {
    const question = Questions.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json({ user: req.userId, question })
  },

  async delete (req, res) {
    await Questions.findByIdAndDelete(req.params.id)
    return res.json({ status: 'ok' })
  }
}
