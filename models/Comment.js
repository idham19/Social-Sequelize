const { db, Sequelize } = require("../db/connection");
const { Model, DataTypes } = require("sequelize");

class Comment extends Model{};

Comment.init({
 body:DataTypes.STRING,
 createdAt:DataTypes.DATE
},{
  sequelize: db,
    modelName: "Comment",
})

module.exports = Comment;