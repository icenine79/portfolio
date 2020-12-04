const express = require("express");

const Message = require("../models/messages");

const router = express.Router();

router.post("", (req, res, next) => {
  const message = new Message({
    message: req.body.message,
    email: req.body.email,

  });

  message.save().then(createdMessage => {
    res.status(201).json({
      message: "Message added successfully",
      messageId: createdMessage._id
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

router.get("", (req, res, next) => {
  Message.find().then(messages => {
    res.status(200).json({
      message: "Comments fetched successfully!",
      messageObj: messages
    });
  });
});


module.exports = router;
