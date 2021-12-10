const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");
const Movie = require("../movie/movieModel");
const Series = require("../series/seriesModel");
const User = require("../user/userModel");

const Actor = sequelize.define("Actor", {
  actorId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nationality: {
    type: DataTypes.STRING
  },
  movieId: {
    type: DataTypes.INTEGER,
    references: {
      model: Movie,
      key: "movieId"
    }
  },
  seriesId: {
    type: DataTypes.INTEGER,
    references: {
      model: Series,
      key: "seriesId"
    }
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
  tableName: "Actors"
});

module.exports = Actor;