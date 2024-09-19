const { db, Sequelize } = require("../db/connection");
const { Model, DataTypes } = require("sequelize");
class Profile extends Model{};
Profile.init({
bio:DataTypes.STRING
},{
sequelize:db,
modelName:"Profile"
})

module.exports = Profile;