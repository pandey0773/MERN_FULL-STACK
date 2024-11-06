const mongoose = require("mongoose");


// product schema modal
const productSchema = new mongoose.Schema({
  productName: String,
  costPrice: Number,
  sellingPrice: Number,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;



// user schema model
// const usersSchema = new mongoose.Schema({
//   userName: String,
//   password: String,
//   level:Number,
// });
// const User = mongoose.model("User", usersSchema);
// module.exports = User;