const User = require("./userModel");

exports.addUser = async (userObj) => {
  try {
    await User.sync();
    await User.create(userObj);
    console.log(`Successfully added ${userObj.name}.`);
  } catch (error) {
    console.log(error);
  }
}

exports.listUsers = async () => {
  try {
    const list = await User.findAll({});
    console.log(list);
  } catch (error) {
    console.log(error);
  }
}

exports.updateUser = async (key1, value1, key2, value2) => {
  try {
    const newVal = {};
    const condition = {};
    newVal[key1] = value1;
    condition[key2] = value2;
    const updatedObj = await User.update(newVal, { where: condition });
    console.log(`Successfully updated ${updatedObj} user(s)/row(s).`);
  } catch (error) {
    console.log(error);
  }
}

exports.deleteUser = async (key, value) => {
  try {
    const condition = {};
    condition[key] = value;
    const deletedObj = await User.destroy({ where: condition });
    console.log(`Successfully deleted ${deletedObj} user(s)/row(s).`);
  } catch (error) {
    console.log(error);
  }
}