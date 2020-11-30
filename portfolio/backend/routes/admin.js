const express = require("express");

const Product = require("../models/admin");

const router = express.Router();

router.post("", (req, res, next) => {
  const product = new Product({
      name: req.body.name,
      category:req.body.category,
      description:req.body.description,
      imageUrl:req.body.imageUrl,
      price:req.body.price

    });
    product.save().then(createdProduct => {
    res.status(201).json({
      message: "Product added successfully",
      productId: createdProduct._id
    });
  });
});

router.put("/:id" ,(req, res, next) => {
  const product = new Product({
      _id: req.body.id,
      name: req.body.name,
      category:req.body.category,
      description:req.body.description,
      imageUrl:req.body.imageUrl,
      price:req.body.price

  });
  Product.updateOne({ _id: req.params.id }, product).then(result => {
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
  Product.findById(req.params.id).then(product => {
    if (product) {
      res.status(200).json({
        message: "Product found",
        id: product._id
      });
    } else {
      res.status(404).json({ message: "Product not found!" });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Product.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({ message: "Product deleted!" });
  });
});

module.exports = router;
