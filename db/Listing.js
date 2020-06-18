const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
  name: String,
  price: Number,
  booked: [{date: Date}]
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;