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

// db.sync()
//   .then(() => {
//     console.log('Models synced successfully.');
//     return Like.create( );
//   })

module.exports = Like;