const User = require('../models/User')

module.exports = {
  async index (req, res) {
    const users = await User.find()
    return res.json({ status: 200, data: users })
  },

  async show (req, res) {
    const { id } = req.params

    const user = await User.findById(id)

    return res.json({ status: 200, data: user })
  },

  async store (req, res) {
    const { email } = req.body

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const user = await User.create(req.body)
    return res.json({ status: true, data: user })
  },

  async update (req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json({ status: 200, data: user })
  },

  async destroy (req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.send()
  }
}
