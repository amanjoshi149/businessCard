const mongoose = require("mongoose");
require("dotenv").config();
const mongouri = process.env.MONGO_URL;
mongoose
  .connect(mongouri)
  .then(() => {
    console.log("Connected to MongoDB");
  });

const cardSchema =  new mongoose.Schema({
    name : String,
    description :  String,
    interests : [String],
    socialMedia : [String],
});

const Card = mongoose.model('Card',cardSchema);

module.exports = {
    Card,
};
