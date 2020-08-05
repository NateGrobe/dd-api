const express = require('express')
const app = express()
const Dive = require('./models/dive')

// routers
const diveRouter = require('./controllers/dives')

const mongoose = require('mongoose')


const URI = "mongodb://localhost:27017/dsg"
console.log("Connecting to MongoDB at", URI)
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((e) => {
    console.log("Error connecting to MongoDB", e)
  })

app.use(express.json())

app.use('/api/dives', diveRouter)

module.exports = app
