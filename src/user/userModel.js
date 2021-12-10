const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "Users"
});

module.exports = User;