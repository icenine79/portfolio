const express = require("express");

const Cart = require("../models/cart");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req.body)
  const cart = new Cart({
    date: req.body.cart
  });
  console.log(req.body)

  cart.save().then(createdCart => {
    res.status(201).json({
      message: "Cart created successfully",
      cartId: createdCart._id
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});
