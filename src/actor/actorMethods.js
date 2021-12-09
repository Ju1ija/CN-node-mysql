const Actor = require("./actorModel");

exports.addActor = async (actorObj) => {
  try {
    await Actor.sync();
    await Actor.create(actorObj);
    console.log(`Successfully added ${actorObj.name}.`);
  } catch (error) {
    console.log(error);
  }
}

exports.listActors = async () => {
  try {
    console.log(await Actor.findAll({}));
  } catch (error) {
    console.log(error);
  }
}

exports.updateActor = async (key1, value1, key2, value2) => {
  try {
    const newVal = {};
    const oldVal = {};
    newVal[key1] = value1;
    oldVal[key2] = value2;
    await Actor.update(newVal, { where: oldVal });
  } catch (error) {
    console.log(error);
  }
}