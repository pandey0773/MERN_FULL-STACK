const mongoose = require("mongoose");

// user schema model
const usersSchema = new mongoose.Schema({
  userName: String,
  password: String,
  level:Number,
});
const User = mongoose.model("User", usersSchema);
module.exports = User;