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