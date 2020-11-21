const express = require("express");

const Product = require("../models/products");

const router = express.Router();

router.post("", (req, res, next) => {
  const movie = new Product({
    name: req.body.name,
    category: req.body.category,
    description:req.body.description,
    imageUrl:req.body.imageUrl,
    price:req.body.price

  });

  console.log(req.body)
  movie.save().then(createdProduct => {
    res.status(201).json({
      message: "Product added successfully",
      productId: createdProduct._id,
      product:createdProduct
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

router.get("", (req, res, next) => {
  Movie.find().then(products => {
    res.status(200).json({
      message: "Products fetched successfully!",
      products: products
    });
  });
});

/* router.get("/:id", (req, res, next) => {
  console.log(req.params.id)

  Nasa.findById(req.params.id).then(picture => {
    if (picture) {
      res.status(200).json({
        message:"Picture fetched successfully",
        picture: picture,
        id: picture.id
      });
    } else {
      res.status(404).json({ message: "Picture not found!" });
    }
  });
}); */



router.delete("/:id", (req, res, next) => {
  console.log(req.body)
  Movie.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Comment deleted!" });
  });
});

module.exports = router;
