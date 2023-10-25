const Product = require("../Models/products");

exports.createPorductService = async (data)=>{
    const result = await Product.create(data);

    return result
};
exports.getPorductService = async ()=>{
    const result = await Product.find({});

    return result
};