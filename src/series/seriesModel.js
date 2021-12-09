const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Series = sequelize.define("Series", {
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
  last_episode: {
    type: DataTypes.INTEGER,
    min: 1888,
    max: new Date().getFullYear(),
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
  tableName: "TV Series"
});

module.exports = Series;