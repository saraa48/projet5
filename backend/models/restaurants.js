const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  specialite: { type: String, required: true },
  img: { type: String, required: true },
  
});

module.exports = Restaurant = mongoose.model("Restaurant", RestaurantSchema);
