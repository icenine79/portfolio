const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  name: { type: String, required: true },
  category:{type: String, required:true},
  description:{type: String, required:true},
  imageUrl:{type: String, required:true},
  price:{type: Number, required:true}

});

module.exports = mongoose.model('Products', productsSchema);
