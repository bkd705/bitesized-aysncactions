const mongoose = require('mongoose'),
      Schema = mongoose.Schema

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    default: false
  }
})

const Todo = mongoose.model('todoSchema', todoSchema)

module.exports = Todo
