const diveRouter = require('express').Router()
const Dive = require('../models/dive')

diveRouter.get('/', async (req, res) => {
  const dives = await Dive.find({})
  console.log(dives.length)
  res.json(dives.map(dive => dive.toJSON()))
})

diveRouter.get('/:num', async (req, res) => {
  const number = req.params.num
  const dive = await Dive.findOne({ number: number })
  res.json(dive)
})

diveRouter.get('/front', async (req, res) => {
  const dives = await Dive.find({ direction: "front" })
  res.json(dives.map(dive => dive.toJSON()))
})

diveRouter.get('/back', async (req, res) => {
  const dives = await Dive.find({ direction: 'back' })
  res.json(dives.map(dive => dive.toJSON()))
})

diveRouter.get('/reverse', async (req, res) => {
  const dives = await Dive.find({ direction: 'reverse' })
  res.json(dives.map(dive => dive.toJSON()))
})

diveRouter.get('/inward', async (req, res) => {
  const dives = await Dive.find({ direction: 'inward' })
  res.json(dives.map(dive => dive.toJSON()))
})

diveRouter.get('/twister', async (req, res) => {
  const dives = await Dive.find({ direction: 'twister' })
  res.json(dives.map(dive => dive.toJSON()))
})

diveRouter.get('/armstand', async (req, res) => {
  const dives = await Dive.find({ direction: 'armstand' })
  res.json(dives.map(dive => dive.toJSON()))
})

module.exports = diveRouter
