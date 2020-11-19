const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();


router.post("/signup", (req, res, next) => {
  let user;
  let admin;
  bcrypt.hash(req.body.password, 10).then(hash => {
    if(req.body.email==="vitor.m.c.n.ferreira@gmail.com"){
     admin = new User({
       name:req.body.name,
      email: req.body.email,
      password: hash,
      isAdmin: true

    });
    admin
    .save()
    .then(result => {
      res.status(201).json({
        message: "Admin created!",
        result: result
      });
    })
  }else{
     user = new User({
      name:req.body.name,
      email: req.body.email,
      password: hash,
      isAdmin: false

});
user
.save()
.then(result => {
  res.status(201).json({
    message: "User created!",
    result: result
  });
})
}
})

      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });

router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      /* if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      } */
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      /* if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      } */
      const token = jwt.sign(
        {name:req.body.name, email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        fetchedUser: fetchedUser
      });
    })
    /* .catch(err => {
      return res.status(401).json({
        message: "Auth failed"
      });
    }); */
});

module.exports = router;
