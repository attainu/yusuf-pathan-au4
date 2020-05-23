const db = require("../db");
const Sequelize = require("sequelize");

let Menu = db.define(
  "menus",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    item: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cuisine: {
      type: Sequelize.STRING,
      allowNull: false
    },
    veg: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL,
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

module.exports = Menu;
