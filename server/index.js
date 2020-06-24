const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../db/index.js');
const Sequelize = require('sequelize');
 
const app = express();
app.set("view engine", "ejs");
app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}))

app.use(express.static(__dirname+ '/../dist'));
app.use('/:id', express.static(__dirname+'/../dist'));


app.get('/booking/:id', (req, res) => {
  console.log(req.params);
  if (req.params.id === 'favicon.ico') {
    res.send(200);
  }
  else {
    let id = req.params.id;
    db.query(`select * from bookings, listings where listings.id = ${id} and listings.id = listingID`, { type: Sequelize.QueryTypes.SELECT })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
      console.log('err');
    })
  }
})


module.exports = app;