const Series = require("./seriesModel");

exports.addSeries = async (seriesObj) => {
  try {
    await Series.sync();
    await Series.create(seriesObj);
    console.log(`Successfully added ${seriesObj.title} (${seriesObj.release}-${seriesObj.last_episode}).`);
  } catch (error) {
    console.log(error);
  }
}

exports.listSeries = async () => {
  try {
    console.log(await Series.findAll({}));
  } catch (error) {
    console.log(error);
  }
}