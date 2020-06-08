const Sequelize = require("sequelize");

const db = new Sequelize("socialmedia", "postgres", "root", {
    host: "localhost",
    dialect: "postgres"
});

db.authenticate()
.then(() => {
    console.log("Connection is established");
});

module.exports = db;