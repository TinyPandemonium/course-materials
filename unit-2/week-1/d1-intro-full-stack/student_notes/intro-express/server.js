//load express
const express = require('express');
const path = require('path');

// require the To Do "database"
const todoDb = require('./data/todo-db');

//creat our express
const app = express();
app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views'))

//define a "root" route directly on app
//tomorrow

app.get('/', function (req, res) {
    res.send('<h1>Hello BTY! We are the best and ken is still wrong</h1>');
});

app.get('/todos', function(req, res) {
    res.render('todos/index', {
      todos: todoDb.getAll()
    });
  });
  

app.listen(3000, function() {
    console.log('listening on port 3000')
});
app.get('/home', function(req, res) {
    res.render('home');
  });