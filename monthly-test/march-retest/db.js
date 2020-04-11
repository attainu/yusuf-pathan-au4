const Sequelize = require('sequelize');

// let { DATABASE_NAME, 
//   USER_NAME, 
//   PASSWORD, HOST_NAME, DIALECT } = process.env;

const db = new Sequelize("buysell", "postgres", "root", {
  host: "localhost",
  dialect: "postgres"
});

db.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('Users db and user table have been created');
});

module.exports = db;
