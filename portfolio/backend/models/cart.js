const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  dateCreated: {type: Date, required:true}

});

module.exports = mongoose.model('Cart', cartSchema);
