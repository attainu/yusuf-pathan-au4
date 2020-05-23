const db = require("../db");
const Sequelize = require("sequelize");

let Table = db.define(
  "tables",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    strength: {
      type: Sequelize.INTEGER, 
      defaultValue: 2
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    floor_number: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);

db.sync().then(res => {
  console.log("Table db has been created", res);
});

module.exports = Table;
