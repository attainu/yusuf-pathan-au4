const Sequelize = require("sequelize");

const db = new Sequelize("tables", "postgres", "root", {
    host: "localhost",
    dialect: "postgres"
})

db.authenticate()
.then(() => {
    console.log("DB connection is established");
})

module.exports = db;    