const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../db/index.js');
const Sequelize = require('sequelize');

const app = express();
app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}))

app.use(express.static(__dirname+ '/../dist'));

// app.get("/", (req, res) => {
//   res.status(200).send("Hello World!");
// });

app.get('/:id', (req, res) => {
  let id = req.params.id;
  db.query(`select * from bookings, listings where listings.id = ${id} and listings.id = listingID`, { type: Sequelize.QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
})

let port = 3030;

app.listen(port, () => console.log(`listening to port ${port}`));

module.exports = app;