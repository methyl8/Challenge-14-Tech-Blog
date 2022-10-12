const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        modelName: 'user',
        key: 'id'
      }
    } 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post'
  }
);

module.exports = Post;
