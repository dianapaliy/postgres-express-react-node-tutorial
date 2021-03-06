'use strict';
module.exports = (sequelize, DataTypes) => {
  var TodoItem = sequelize.define('TodoItem', {
    content: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {});
  TodoItem.associate = function(models) {
    // associations can be defined here
  };
  return TodoItem;
};

module.exports = (sequelize, DataTypes) => {
    const TodoItem = sequelize.define('TodoItem', {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });

    TodoItem.associate = (models) => {
        TodoItem.belongsTo(models.Todo, {
            foreignKey: 'todoId',
            onDelete: 'CASCADE',
        });
    };

    return TodoItem;
};