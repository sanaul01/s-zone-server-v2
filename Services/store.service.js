const Store = require("../Models/store");

exports.postStoreService = async (data) => {
    const result = await Store.create(data)
    console.log("data", result)
    return result;
};

exports.getStoreService = async () => {
    const result = await Store.find({});
    return result;
};