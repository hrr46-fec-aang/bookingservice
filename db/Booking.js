const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const bookingSchema = new mongoose.Schema({
  name: String,
  arriveAt: Date,
  departAt: Date,
  groupSize: Number
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;