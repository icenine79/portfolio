const express = require("express");

const Movie = require("../models/movies");

const router = express.Router();

router.post("", (req, res, next) => {
  const movie = new Movie({
    comment: req.body.comment,
    author: req.body.author

  });

  console.log(req.body)
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
      pictures: comments
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
