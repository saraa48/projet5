const mongoose = require("mongoose");
const config = require("config");

const connexionDb = async () => {
  try {
    await mongoose.connect(config.get("mongoURI"), { useNewUrlParser: true,useUnifiedTopology: true , useCreateIndex:true } );
    console.log(" mongodb is running ...");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connexionDb