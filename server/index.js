const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}))

app.use(express.static(__dirname+ '/../dist'));

let port = 3030;

app.listen(port, () => console.log(`listening to port ${port}`))