const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");
const User = require("../user/userModel");

const Series = sequelize.define("Series", {
  seriesId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  release: {
    type: DataTypes.INTEGER,
    min: 1888,
    allowNull: false
  },
  lastEpisode: {
    type: DataTypes.INTEGER,
    min: 1888
  },
  genre: {
    type: DataTypes.STRING
  },
  rating: {
    type: DataTypes.DECIMAL(10, 1),
    min: 0,
    max: 10
  },
  addedBy: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "userId"
    },
    allowNull: false
  }
}, {
  tableName: "TV Series"
});

module.exports = Series;