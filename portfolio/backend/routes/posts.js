const express = require("express");

const Product = require("../models/post");

const router = express.Router();
const checkAuth = require('../midleware/check-auth');

router.post("", (req, res, next) => {
  const product = new Product({
      name: req.body.name,
      category:req.body.category,
      description:req.body.description,
      imageUrl:req.body.imageUrl,
      price:req.body.price

    });
    console.log(req.body)
    product.save().then(createdProduct => {
    res.status(201).json({
      message: "Product added successfully",
      productId: createdProduct._id
    });
  });
});

router.put("/:id", checkAuth ,(req, res, next) => {
  const product = new Product({
      _id: req.body.id,
      name: req.body.name,
      category:req.body.category,
      description:req.body.description,
      imageUrl:req.body.imageUrl,
      price:req.body.price

  });
  Post.updateOne({ _id: req.params.id }, product).then(result => {
    res.status(200).json({ message: "Update successful!" });
  });
});

router.get("", (req, res, next) => {
  Product.find().then(products => {
    res.status(200).json({
      message: "Products fetched successfully!",
      products: products
    });
  });
});

router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Product.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Product deleted!" });
  });
});

module.exports = router;
