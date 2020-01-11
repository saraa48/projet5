const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator=require("mongoose-unique-validator");
//Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  ,unique:true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String
  }
});

module.exports = User = mongoose.model("users", UserSchema);
