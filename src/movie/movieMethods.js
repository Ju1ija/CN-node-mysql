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
