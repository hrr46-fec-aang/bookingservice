const Booking = require('./Booking.js');
const faker = require('faker');
const mongoose = require('mongoose');

const insertSampleBookings = function() {
  for (var i = 1; i < 101; i ++) {
  Booking.create([
    { id: i,
      listingName: faker.name.firstName() + '\'s ' + faker.commerce.color() + ' lodge in ' + faker.address.country(),
      price: Math.floor(Math.random() * (150 - 50)) + 50,
      bookedDates: [{date: faker.date.between('2020-06-01', '2020-08-01').toISOString().substring(0, 10)}, 
      {date: faker.date.between('2020-06-01', '2020-08-01').toISOString().substring(0, 10)}, 
      {date: faker.date.between('2020-06-01', '2020-08-01').toISOString().substring(0, 10)}, 
      {date: faker.date.between('2020-06-01', '2020-08-01').toISOString().substring(0, 10)}, 
      {date: faker.date.between('2020-06-01', '2020-08-01').toISOString().substring(0, 10)}, 
      {date: faker.date.between('2020-06-01', '2020-08-01').toISOString().substring(0, 10)}, 
      {date: faker.date.between('2020-06-01', '2020-08-01').toISOString().substring(0, 10)},
      {date: faker.date.between('2020-06-01', '2020-08-01').toISOString().substring(0, 10)}, 
      {date: faker.date.between('2020-06-01', '2020-08-01').toISOString().substring(0, 10)}, 
      {date: faker.date.between('2020-06-01', '2020-08-01').toISOString().substring(0, 10)}, 
      {date: faker.date.between('2020-06-01', '2020-08-01').toISOString().substring(0, 10)},
      {date: faker.date.between('2020-06-01', '2020-08-01').toISOString().substring(0, 10)}, 
      {date: faker.date.between('2020-06-01', '2020-08-01').toISOString().substring(0, 10)}, 
      {date: faker.date.between('2020-06-01', '2020-08-01').toISOString().substring(0, 10)}, 
      {date: faker.date.between('2020-06-01', '2020-08-01').toISOString().substring(0, 10)} ],
      bookings: [{
        bookingName: faker.name.firstName() + ' ' + faker.name.lastName(),
        arriveAt: faker.date.between('2020-07-01', '2020-07-03').toISOString().substring(0, 10),
        departAt: faker.date.between('2020-07-03', '2020-07-05').toISOString().substring(0, 10),
        groupSize: Math.floor(Math.random() * (8 - 1)) + 1
      }]
    }
  ])
    .then(() => mongoose.disconnect());
  }
};

insertSampleBookings();