const { db, Sequelize } = require("../db/connection");
const { Model, DataTypes } = require("sequelize");
class User extends Model {}
const profiles= require("../seed/profiles.json")

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

console.log(profiles);

module.exports = User;
