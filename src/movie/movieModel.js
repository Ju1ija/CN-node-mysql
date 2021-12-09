const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Movie = sequelize.define("Movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  release: {
    type: DataTypes.INTEGER,
    min: 1888,
    max: new Date().getFullYear(),
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING
  },
  rating: {
    type: DataTypes.DECIMAL(10, 1),
    min: 0,
    max: 10
  }
}, {
  tableName: "Movies"
});

module.exports = Movie;