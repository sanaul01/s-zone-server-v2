
const Stock = require('../Models/Stocks')

exports.createStoceService = async (data) =>{
    const result = await Stock.create(data);
    return result;
};

exports.getStockServices = async () =>{
    const result = await Stock.find();
    return result;
}