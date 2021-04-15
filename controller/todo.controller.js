const createError = require('http-errors');
const { Todo } = require('../db/models/todo');

module.exports.createTodo = async (req, res, next) => {
  try {
    const { body } = req;

    const todo = await Todo.create(body);

    if (!todo) {
      return next(createError(400));
    }

    res.send({ data: todo });
  } catch (err) {
    next(err);
  }
};

module.exports.getTodo = async (req, res, next) => {
  try {
    const {
      params: id,
     } = req;

    const todo = await Todo.findByPk(id);

    if (!todo) {
      return next(createError(404));
    }

    res.send({ data: todo });
  } catch (err) {
    next(err);
  }
};

module.exports.getTodos = async (req, res, next) => {
  try {
    const {
      pagination,
     } = req;

    const todos = await Todo.findAll({...pagination});

    if (!todos.length) {
      return next(createError(404));
    }

    res.send({ data: todos });
  } catch (err) {
    next(err);
  }
};

module.exports.updateTodo = async (req, res, next) => {
  try {
    const {
      params: { todoId },
      body,
    } = req;

    const [count, [updatedTodo]] = await Todo.update(body, {
      where: { id: todoId },
      returning: true,
    });

    if (!updatedTodo) {
      return next(createError(400));
    }

    res.send({ data: updatedTodo });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteTodo = async (req, res, next) => {
  try {
    const {
      params: { todoId },
    } = req;

    const rowsCount = await Todo.destroy({ where: { todoId } });

    if (rowsCount === 0) {
      return next(createError(404));
    }
    res.send({ data: rowsCount });
  } catch (err) {
    next(err);
  }
};
