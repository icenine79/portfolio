const express = require("express");

const Movie = require("../models/movies");

const router = express.Router();

router.post("", (req, res, next) => {
  const movie = new Movie({
    comment: req.body.comment,
    author: req.body.author,
    movie:req.body.movie

  });

  movie.save().then(createdComment => {
    res.status(201).json({
      message: "Comment added successfully",
      commentId: createdComment._id
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

router.get("", (req, res, next) => {
  Movie.find().then(comments => {
    res.status(200).json({
      message: "Comments fetched successfully!",
      comments: comments
    });
  });
});





router.delete("/:id", (req, res, next) => {
  Movie.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({ message: "Comment deleted!" });
  });
});

module.exports = router;
