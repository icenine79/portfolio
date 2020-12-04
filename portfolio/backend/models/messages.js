const mongoose = require('mongoose');

const messagesSchema = mongoose.Schema({
  email: { type: String, required: true },
  message: { type: String, required: true }

});

module.exports = mongoose.model('Messages', messagesSchema);
