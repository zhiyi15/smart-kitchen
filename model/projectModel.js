const mongoose = require('mongoose');

const produceSchema = new mongoose.Schema({
  name: { type: String, require: true },
  quantity: { type: Number, require: true },
  dateAdded: { type: Date, default: Date.now()},
  expireDate: { type: Number, require: true },
});

const Produce = mongoose.model('produce', produceSchema);

module.exports = Produce;
