'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {
     
    }
  };
  Todo.init({
    body: {
      allowNull:false,
      type: DataTypes.TEXT,
      validate: {
        isAlphanumeric: true,
        notNull: true,
        notEmpty: true,
      },
    },
    isDone: {
      field: 'is_done',
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN,
      validate: {
        notNull: true,
      },
    },
    deadline: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Todo',
    tableName: 'todos',
    underscored:true,
  });
  return Todo;
};