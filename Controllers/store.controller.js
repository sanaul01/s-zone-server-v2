const {
    postStoreService,
    getStoreService
} = require("../Services/store.service")

exports.postStoreController = async (req, res, next) => {
    try {
        const store = await postStoreService(req.body);
        console.log("store data", store)

        res.status(200).json({
            status: "Successful",
            message: "Data inserted successfully",
            data: store
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Data is not inserted successfully",
            error: error.message
        })
    }
};

exports.getStoreController = async (req, res, next) => {
    try {
        const store = await getStoreService();

        res.status(200).json({
            status: "Successful",
            message: "Data get successfully",
            data: store
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Data is not find successfully",
            error: error.message
        })
    }
};