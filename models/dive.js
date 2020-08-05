const mongoose = require('mongoose')

/*
 * Consider using a one-to-many model. Not sure its necessary tho because the 
 * number of positions doesn't change so hard coding it seems better for now
*/

const schema = new mongoose.Schema({
  name: String,
  number: String,
  direction: String,
  dd: {
    one: {
      a: Number,
      b: Number,
      c: Number,
      d: Number,
    },
    three: {
      a: Number,
      b: Number,
      c: Number,
      d: Number,
    },
    five: {
      a: Number,
      b: Number,
      c: Number,
      d: Number,
    },
    seven: {
      a: Number,
      b: Number,
      c: Number,
      d: Number,
    },
    ten: {
      a: Number,
      b: Number,
      c: Number,
      d: Number,
    },
  },
})

schema.set('toJSON', {
  transform: (doc, obj) => {
    obj.id = obj._id.toString()
    delete obj._id
    delete obj.__v
  }
})

module.exports = mongoose.model('Dive', schema)

