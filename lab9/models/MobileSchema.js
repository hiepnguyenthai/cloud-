var mongoose = require("mongoose");
var schema = mongoose.Schema;
var model = mongoose.model;

var MobileSchema = new schema({
  name: String,
  brand: String,
  image: String,
  price: Number,
});

var MobileModel = mongoose.model("Điện thoại", MobileSchema, "mobile");
module.exports = mobileModel;