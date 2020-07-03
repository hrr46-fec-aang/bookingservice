var Sequelize = require('sequelize');
var db = new Sequelize('booking', 'username', 'password', {
	host: 'localhost',
	dialect: 'mysql',
	operatorsAliases: false,
	port: 3306
});

db.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});

module.exports = db;
