const { db, Sequelize } = require("../db/connection");
const { Model, DataTypes } = require("sequelize");
const users= require("../seed/users.json")


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


// db.sync()
//   .then(() => {
//     console.log('Models synced successfully.');
//     return User.bulkCreate(users);
//   })


module.exports = User;
