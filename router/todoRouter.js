const todoRouter = require('express').Router({ mergeParams: true });
const TodoController = require('../controller/todo.controller');
const paginate = require('../middlewares/paginate.mw');

todoRouter
  .route('/')
  .get(paginate, TodoController.getTodos)
  .post(TodoController.createTodo);
todoRouter
  .route('/:todoId')
  .patch(TodoController.updateTodo)
  .delete(TodoController.deletePower)
  .get('/:id', TodoController.getTodo);

module.exports = todoRouter;
