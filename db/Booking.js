const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/booking';

mongoose.connect(mongoUri);
mongoose.Promise = global.Promise;

const bookingSchema = new mongoose.Schema({
  id: {type: Number, default: 1},
  listingName: String,
  price: Number,
  bookedDates: [{date: Date}],
  bookings: [{
    bookingName: String,
    arriveAt: Date,
    departAt: Date,
    groupSize: Number
  }]

}, 
  {
    timestamps: true
  }
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;