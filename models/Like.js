const { db, Sequelize } = require("../db/connection");
const { Model, DataTypes } = require("sequelize");

class Like extends Model{};
Like.init({
   reactionType:DataTypes.STRING,
   createdAt:DataTypes.DATE
},{
    sequelize: db,
    modelName: "Like",
})

module.exports = Like;