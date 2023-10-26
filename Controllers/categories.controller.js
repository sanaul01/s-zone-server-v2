const { createCategoryService, getCategoryService } = require("../Services/categories.service");


exports.postCategory = async(req, res, next)=>{
    try {
        const results = await createCategoryService(req.body);
            console.log(results)
        res.status(200).json({
            status:"success",
            message: "data posted successfully",
            data: results
        })
        
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't post data",
            error: error.message
        })
    }
};

exports.getCategory = async(req, res, next)=>{
    try {
        const results = await getCategoryService();
            console.log(results)
        res.status(200).json({
            status:"success",
            message: "data get successfully",
            data: results
        })
        
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get data",
            error: error.message
        })
    }
}