const express = require('express'),
      mongoose = require('mongoose')

const app = express(),
      db = mongoose.connection

const Todo = require('../models/todo_model')

app.get('/all', (req, res) => {
  Todo.find({}, (err, todos) => {
    err ? console.log(err) : res.send({ todos })
  })
})

app.post('/new', (req, res) => {
  const __todo = req.body
  const newTodo = Todo({
    title: __todo.title,
    completed: false
  })
  newTodo.save(err => {
    if (err) console.log(err)
    else {
      console.log('Todo Added!'),
      res.send({ message: `'${newTodo.title}' added to todos!`})
    }
  })
})

app.delete('/delete/:id', (req, res) => {
  Todo.remove({ '_id': req.params.id }, (err) => {
    err ? console.log(err) : res.send({ message: 'Successfully removed todo!' })
  })
})

module.exports = app
