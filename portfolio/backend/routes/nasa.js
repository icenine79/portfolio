const express = require("express");

const Nasa = require("../models/nasa");

const router = express.Router();

router.post("", (req, res, next) => {
  const nasa = new Nasa({
    date: req.body.date,
    explanation: req.body.explanation,
    hdurl: req.body.hdurl,
    media_type: req.body.media_type,
    service_version: req.body.service_version,
    title: req.body.title,
    url:req.body.url

  });

  console.log(req.body)
  nasa.save().then(createdPicture => {
    res.status(201).json({
      message: "Picture added successfully",
      picId: createdPicture._id
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

router.get("", (req, res, next) => {
  Nasa.find().then(pictures => {
    res.status(200).json({
      message: "Pictures fetched successfully!",
      pictures: pictures
    });
  });
});
router.delete("/:id", (req, res, next) => {
  console.log(req.body)
  Nasa.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Image deleted!" });
  });
});

module.exports = router;
