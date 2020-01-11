const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator=require("mongoose-unique-validator");
//Create Schema
const RestoSchema = new Schema({
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

  address: { type: String, required: true },
  specialite: { type: String, required: true },
  img: { type: String, required: true },

});

module.exports = Rest = mongoose.model("Rest", RestoSchema);
