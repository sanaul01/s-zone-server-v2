const { createBrandService, getBrandService } = require("../Services/brand.service");


exports.postBrand = async(req, res, next)=>{
    try {
        const brand = await createBrandService(req.body);

        res.status(200).json({
            status: "fail",
            message: "data posted successfully",
            data: brand
        })
        
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "data did not post",
            error: error.message
        })
    }
};

exports.getBrand = async(req, res, next)=>{
    try {
        const brand = await getBrandService(req.body);

        res.status(200).json({
            status: "fail",
            message: "data get successfully",
            data: brand
        })
        
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "data did not get",
            error: error.message
        })
    }
};