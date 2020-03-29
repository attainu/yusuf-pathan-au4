const db = require("../db");
const Sequelize = require("sequelize");

let Waiter = db.define(
  "waiters",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    mobile: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    ratings: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    experience: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },
  {
    timestamps: false
  }
);

db.sync().then(res => {
  console.log("Table db has been created");
});

module.exports = Waiter;
