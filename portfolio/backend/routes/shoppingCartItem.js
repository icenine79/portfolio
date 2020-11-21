const express = require("express");

const ShoppingCartItem = require("../models/shoppingCartItem");

const router = express.Router();

router.post("", (req, res, next) => {
  const cart = new ShoppingCartItem({
    name:req.body.name,
    imageUrl: req.body.imageUrl,
    price:req.body.price,
    quantity: req.body.quantity

  });

  console.log(req.body)
  cart.save().then(createdItemCart => {
    res.status(201).json({
      message: "Product added successfully",
      cartId: createdItemCart._id
´    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

router.get("", (req, res, next) => {
  ShoppingCartItem.find().then(cartItems => {
    res.status(200).json({
      message: "Items fetched successfully!",
      cartItems: cartItems
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



/* router.delete("/:id", (req, res, next) => {
  console.log(req.body)
  Movie.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Comment deleted!" });
  });
}); */

module.exports = router;
