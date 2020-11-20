const mongoose = require('mongoose');

const moviesSchema = mongoose.Schema({
  comment: { type: String, required: true },
  author: { type: String, required: true },
movie:{type: String, required:true}

});

module.exports = mongoose.model('Movies', moviesSchema);
