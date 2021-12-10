const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");
const User = require("../user/userModel");

const Movie = sequelize.define("Movie", {
  movieId: {
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
  tableName: "Movies"
});

module.exports = Movie;