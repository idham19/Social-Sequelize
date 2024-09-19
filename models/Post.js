const { db, Sequelize } = require("../db/connection");
const { Model, DataTypes } = require("sequelize");

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  },
  {
    sequelize: db,
    modelName: "Post",
  }
);

module.exports = Post;
