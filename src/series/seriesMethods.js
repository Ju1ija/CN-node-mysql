const Series = require("./seriesModel");

exports.addSeries = async (seriesObj) => {
  try {
    await Series.sync();
    await Series.create(seriesObj);
    console.log(`Successfully added ${seriesObj.title} (${seriesObj.release}-${seriesObj.lastEpisode ? seriesObj.lastEpisode : ""}).`);
  } catch (error) {
    console.log(error);
  }
}

exports.listSeries = async () => {
  try {
    const list = await Series.findAll({});
    console.log(list);
  } catch (error) {
    console.log(error);
  }
}

exports.updateSeries = async (key1, value1, key2, value2) => {
  try {
    const newVal = {};
    const condition = {};
    newVal[key1] = value1;
    condition[key2] = value2;
    const updatedObj = await Series.update(newVal, { where: condition });
    console.log(`Successfully updated ${updatedObj} series/row(s).`);
  } catch (error) {
    console.log(error);
  }
}

exports.deleteSeries = async (key, value) => {
  try {
    const condition = {};
    condition[key] = value;
    const deletedObj = await Series.destroy({ where: condition });
    console.log(`Successfully deleted ${deletedObj} series/row(s).`);
  } catch (error) {
    console.log(error);
  }
}