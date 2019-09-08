const Opportunities = require('../models/Opportunities')

module.exports = {
  async index (req, res) {
    try {
      const opportunitys = await Opportunities.find().populate(['user'])

      return res.json({ opportunitys })
    } catch (err) {
      return res.status(400).json({ log: 'Error request opportunity' })
    }
  },

  async show (req, res) {
    try {
      const opportunity = await Opportunities.findById(req.params.opportunitiesId).populate(['user'])

      return res.json({ opportunity })
    } catch (err) {
      return res.status(400).json({ log: 'Error request id opportunity' })
    }
  },

  async store (req, res) {
    try {
      const opportunity = await Opportunities.create(req.body)

      return res.json({ opportunity })
    } catch (err) {
      return res.status(400).json({ log: 'Error store opportunity' })
    }
  },

  async update (req, res) {
    try {
      return res.json({ ok: 'ok' })
    } catch (err) {
      return res.status(400).json({ log: 'Error update opportunity' })
    }
  },

  async delete (req, res) {
    try {
      await Opportunities.findByIdAndRemove(req.params.opportuniiesId)

      return res.json({ status: 'ok' })
    } catch (err) {
      return res.status(400).json({ log: 'Error delete opportunity' })
    }
  }

}
