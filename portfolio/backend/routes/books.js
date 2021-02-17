const express = require("express");

const Book = require("../models/books");

const router = express.Router();

router.post("", (req, res, next) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    category:req.body.category

  });

  book.save().then(createdBook => {
    console.log(req.body)
    res.status(201).json({
      message: "Book added successfully",
      bookId: createdBook._id
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});
router.get("",(req,res,next)=>{
  Book.find().then(books=>{
    res.status(200).json({
      message: "Books fetched successfully",
      books:books
    });
  })
})



router.get("/:id", (req, res, next) => {
  Book.findById(req.params.id).then(book => {
    if (book) {
      res.status(200).json({
        message: "Product found",
        bookId: book._id,
        book:book
      });
    } else {
      res.status(404).json({ message: "Book not found!" });
    }
  });
});

/* router.delete("/:id", (req, res, next) => {
  Product.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({ message: "Product deleted!" });
  });
});

router.get("", (req, res, next) => {
  Book.find().then(books => {
    res.status(200).json({
      message: "Books fetched successfully!",
      books: books
    });
  });
});
 */

module.exports = router;
