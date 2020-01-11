const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  img: { type: String, required: true },
  plat: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  // Restaurant:{
  //     type:String,

  // }
  restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" }
});

module.exports = Menu = mongoose.model("Our Menu", MenuSchema);
