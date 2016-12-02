// Include required packages for server
const mongoose = require('mongoose'),
      express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path')

// Set default app constant and port constant.
const app = express(),
      port = 8080


// Setup body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// Connect to mongoose database
mongoose.connect('mongodb://localhost/data/db')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to db at /data/db')
})

// Inlude routes
const todo_routes = require('./routes/todo_routes')
app.use('/todo', todo_routes)

// Connect app
app.listen(port, () => {
  console.log(`Listening on port ${port} \n Stop server with CTRL + C`)
})
