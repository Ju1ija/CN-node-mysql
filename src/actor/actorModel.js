const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");
const Movie = require("../movie/movieModel");
const Series = require("../series/seriesModel");

const Actor = sequelize.define("Actor", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nationality: {
    type: DataTypes.STRING
  },
  movie_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Movie,
      key: "id"
    }
  },
  series_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Series,
      key: "id"
    }
  }
}, {
  tableName: "Actors"
});

module.exports = Actor;