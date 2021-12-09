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

exports.updateSeries = async (key1, value1, key2, value2) => {
  try {
    const newVal = {};
    const oldVal = {};
    newVal[key1] = value1;
    oldVal[key2] = value2;
    await Series.update(newVal, { where: oldVal });
  } catch (error) {
    console.log(error);
  }
}

exports.deleteSeries = async (key, value) => {
  try {
    const seriesObj = {};
    seriesObj[key] = value;
    await Series.destroy({ where: seriesObj });
  } catch (error) {
    console.log(error);
  }
}