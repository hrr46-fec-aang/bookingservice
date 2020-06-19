const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Booking = require('../db/Booking.js');
const mongoose = require('mongoose');

const app = express();
app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}))

app.use(express.static(__dirname+ '/../dist'));

app.get('/api/bookings/:id', (req, res) => {
  let id = req.params.id;
  Booking.find({'id': id})
  .then(data => {
    res.send(data);
  })
})

let port = 3030;

app.listen(port, () => console.log(`listening to port ${port}`))