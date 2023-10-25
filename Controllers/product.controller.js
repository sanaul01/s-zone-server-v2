const { createPorductService, getPorductService } = require("../Services/product.service")


exports.postProduct = async (req, res) => {
    try {
        const result = await createPorductService(req.body)

        res.status(200).json({
            status: "Successfull",
            message: "Data post succesfully",
            data: result
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't post data",
            error: error.message
        })
    }
};


exports.getProduct = async (req, res, next) => {
    try {
        const products = await getPorductService();

        res.status(200).json({
            stasus: "successful",
            message: 'successfully get data',
            data: products
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get data",
            error: error.message
        })
    }
};