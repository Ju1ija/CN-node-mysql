const Actor = require("./actorModel");

exports.addActor = async (actorObj) => {
  try {
    await Actor.sync();
    await Actor.create(actorObj);
    console.log(`Successfully added ${actorObj.fullName}.`);
  } catch (error) {
    console.log(error);
  }
}

exports.listActors = async () => {
  try {
    const list = await Actor.findAll({});
    console.log(list);
  } catch (error) {
    console.log(error);
  }
}

exports.updateActor = async (key1, value1, key2, value2) => {
  try {
    const newVal = {};
    const condition = {};
    newVal[key1] = value1;
    condition[key2] = value2;
    const updatedObj = await Actor.update(newVal, { where: condition });
    console.log(`Successfully updated ${updatedObj} actor(s)/row(s).`);
  } catch (error) {
    console.log(error);
  }
}

exports.deleteActor = async (key, value) => {
  try {
    const condition = {};
    condition[key] = value;
    const deletedObj = await Actor.destroy({ where: condition });
    console.log(`Successfully deleted ${deletedObj} actor(s)/row(s).`);
  } catch (error) {
    console.log(error);
  }
}