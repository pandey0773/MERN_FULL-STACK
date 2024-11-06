const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser");
// const multer = require('multer')
// const Grid = require('gridfs-stream')
const connectDb = require("./db");
const Product = require("./schemaModal.JS");
const User = require("./userSchema");
// const mongoose = require("mongoose");

//schema
// const mongoose = require("mongoose");
// const productSchema = new mongoose.Schema({
//   productName: String,
//   costPrice: Number,
//   sellingPrice: Number,
// });
// const Product = mongoose.model("Product", productSchema);

//Modal
// const usersSchema = new mongoose.Schema({
//   userName: String,
//   password: String,
//   level:Number,
// });
// const User = mongoose.model("User", usersSchema);

const app = express();
app.use(cors());
app.use(bodyParse()); // is use to read the object data getting

const PORT = 5000 || 4000;
// //////////////////////////////////////////////////////////
// *ALL API CODE WILL GO HERE.............. *

app.get("/learning", async (req, res) => {
  try {
    if (req?.query?.product) {
      const data = await Product.find({ productName: req.query.product });
      res.status(200).json(data);
    } else {
      const data = await Product.find({});
      res.status(200).json(data);
    }
  } catch (error) {
    console.log(error).status(400);
  }
});

app.post("/signinAPI", async (req, res) => {
  const data = req?.body?.formData;
  console.log(data?.userName, "from body");
  console.log(data);
  try {
    const response = await User.find({ userName: data?.userName });
    if (response?.length > 0) {
      console.log("user matched");
      setTimeout(() => {
        res.status(200).json({ data: response[0], status: "OK" });
      }, 2000);
    } else {
      console.log("user not matched");
      res.status(200).json({ data: null, status: "ERR" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/post", async (req, res) => {
  try {
    let product = new Product();
    product.productName = req?.body?.sendProduct?.productName;
    product.costPrice = req?.body?.sendProduct?.costPrice;
    product.sellingPrice = req?.body?.sendProduct?.sellingPrice;
    const doc = await product.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.post("/signup", async (req, res) => {
  // console.log(req?.body?.formData);
  try {
    const existingUser  = await User.find({userName: req?.body?.formData?.userName})
    console.log(existingUser[0],'existing user .....')
    if (!existingUser[0]?.userName) {
      let user = new User();
      user.userName = req?.body?.formData?.userName;
      user.password = req?.body?.formData?.password;
      await user.save();
      res.status(201).json({ message: user, status: "REGISTERED" });
    } 
    else {
      res.status(400).json({message: 'user already exsist'})
    }

  }
  catch (error) {
    console.log(error);
    res.status(400).json({ message: error, status: "NOT_REGISTERED" });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("product deleted");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.put("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body.data;
  try {
    const updatedData = await Product.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedData) {
      res.status(404).send({ message: "data not found" });
    } else {
      res.send(updatedData);
    }
  } catch (error) {
    // console.log(req.body.data)
    // console.log(req.params.id)
    res.status(400).json(error);
  }
});


//13/06/2024
app.get('/allUsers',async (req,res)=>{
  try {
    const dbResponse = await User.find({});
    res.status(200).json({dbResponse})
  } catch (error) {
    res.status(400).json({meassage:error})
  }
})

////////////////////////////////////////////////////////////
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`"server is running on port "${PORT}`);
  });
});
