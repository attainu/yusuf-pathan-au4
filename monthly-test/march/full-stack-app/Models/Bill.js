const db = require("../db");
const Sequelize = require("sequelize");

let Bill = db.define(
  "bills",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    user_mobile: {
      type: Sequelize.INTEGER
    },
    items: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    total: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    payment: {
      type: Sequelize.STRING,
      defaultValue: "cash",
    },
    waiter_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    table_id: {
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

module.exports = Bill;
