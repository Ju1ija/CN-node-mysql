const Movie = require("./movieModel");

exports.addMovie = async (movieObj) => {
  try {
    await Movie.sync();
    await Movie.create(movieObj);
    console.log(`Successfully created ${movieObj.title} (${movieObj.release}).`);
  } catch (error) {
    console.log(error);
  }
}

exports.listMovies = async () => {
  try {
    console.log(await Movie.findAll({}));
  } catch (error) {
    console.log(error);
  }
}

exports.updateMovie = async (key1, value1, key2, value2) => {
  try {
    const newVal = {};
    const oldVal = {};
    newVal[key1] = value1;
    oldVal[key2] = value2;
    await Movie.update(newVal, { where: oldVal });
  } catch (error) {
    console.log(error);
  }
}

exports.deleteMovie = async (key, value) => {
  try {
    const movieObj = {};
    movieObj[key] = value;
    await Movie.destroy({ where: movieObj });
  } catch (error) {
    console.log(error);
  }
}