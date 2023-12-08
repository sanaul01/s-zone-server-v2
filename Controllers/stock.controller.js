const { createStoceService, getStockServices } = require("../Services/stock.service");


exports.postStock = async ( req, res)=>{
    try {
        const result = await createStoceService(req.body)
        res.status(200).json({
            status: "Successfull",
            message: "Data post succesfully",
            data: result
        })
        
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't post data",
            error: error.message
        })
    }
};


exports.getStock = async ( req, res)=>{
    try {
        const stocks = await getStockServices();
        res.status(200).json({
            status: "Successful",
            message: "data gets successfully",
            data: stocks
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get data",
            error: error.message
        })
    }
}