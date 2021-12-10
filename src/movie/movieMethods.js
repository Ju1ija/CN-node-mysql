const Movie = require("./movieModel");

exports.addMovie = async (movieObj) => {
  try {
    await Movie.sync();
    await Movie.create(movieObj);
    console.log(`Successfully added ${movieObj.title} (${movieObj.release}).`);
  } catch (error) {
    console.log(error);
  }
}

exports.listMovies = async () => {
  try {
    const list = await Movie.findAll({});
    console.log(list);
  } catch (error) {
    console.log(error);
  }
}

exports.updateMovie = async (key1, value1, key2, value2) => {
  try {
    const newVal = {};
    const condition = {};
    newVal[key1] = value1;
    condition[key2] = value2;
    const updatedObj = await Movie.update(newVal, { where: condition });
    console.log(`Successfully updated ${updatedObj} movie(s)/row(s).`);
  } catch (error) {
    console.log(error);
  }
}

exports.deleteMovie = async (key, value) => {
  try {
    const condition = {};
    condition[key] = value;
    const deletedObj = await Movie.destroy({ where: condition });
    console.log(`Successfully deleted ${deletedObj} movie(s)/row(s).`);
  } catch (error) {
    console.log(error);
  }
}