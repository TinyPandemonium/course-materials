// controllers/todos.js
const Todo = require('../models/todos');

function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll()
    });
  }

  function show(req, res) {
    res.render('todos/show', {
      todo: Todo.getOne(req.params.id),
    });
  }
  
 
  module.exports = {
    index,
    show
};