const { db, Sequelize } = require("../db/connection");
const { Model, DataTypes } = require("sequelize");
class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "User",
  }
);

const user = User.create({
  username: "m",
  email: "djksnjk@"
});


module.exports = User;
