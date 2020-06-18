const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/booking';

const db = mongoose.connect(mongoURI);

module.exports = db;