const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    title_of_work: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre_tag: {
        type: DataTypes.STRING,
    },
    tag: {
        type: DataTypes.STRING,
    },
    contents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_name: {
        type: DataTypes.STRING,
        // references: {
        //   model: 'user',
        //   key: 'user_name',
        // },
      },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
