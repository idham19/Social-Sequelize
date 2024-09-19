const { db, Sequelize } = require("../db/connection");
const { Model, DataTypes } = require("sequelize");
const profiles= require("../seed/profiles.json")


class Profile extends Model{};
Profile.init({
bio:DataTypes.STRING,
profilePicture: DataTypes.STRING,
birthday:DataTypes.DATE
},{
sequelize:db,
modelName:"Profile"
})
// db.sync()
//   .then(() => {
//     console.log('Models synced successfully.');
//     return Profile.create({
//       bio: "hello",
//       profilePicture: "fdgdfgfd",
//       birthday: '1995-03-01'
//     });
//   })

// db.sync().then(()=>{ Profile.bulkCreate(profiles)})
module.exports = Profile;