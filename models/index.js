const Comment = require("./Comment");
const Like = require("./Like");
const Post = require("./Post");
const Profile = require("./Profile");
const User = require("./User");

//user--->Profile
User.hasOne(Profile, { onDelete: "CASCADE" });
Profile.belongsTo(User);

//user --> Post
User.hasMany(Post, { onDelete: "CASCADE" });
Post.belongsTo(User);

//Post--> Comment
Post.hasMany(Comment, { onDelete: "CASCADE" });
Comment.belongsTo(Post);

//User ---> Like
User.belongsToMany(Like, { through: "UsersLikes" });
Like.belongsToMany(User, { through: "UsersLikes" });

module.exports = {
  Comment,
  Like,
  Post,
  Profile,
  User,
};
