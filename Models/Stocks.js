const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const stockSchema = mongoose.Schema({
    productId: {
        type: ObjectId,
        require: true,
        ref: "Product"
    },

    name: {
        type: String,
        require: [true, "please provied a name for this products"],
        trim: true,
        unique: [true, "name must be unique"],
        lowercase: true,
        minLength: [3, "Name must be at least 3 character"],
        maxLength: [100, "Name is too larger"]
    },

    description: {
        type: String,
        require: true
    },

    unit: {
        type: String,
        require: true,
        enum: {
            values: ["kg", "litre", "pcs", "bag"],
            message: "Unit value can't be {VALUE}, must be kg/ litre/ pcs/ bag"
        }
    },

    imageURLs: [{
        type: String,
        require: true,
        validate: {
            validator: (value) => {
                if (!Array.isArray(value)) {
                    return false;
                };
                let isValid = true;
                value.forEach(url => {
                    if (!validator.isURL(url)) {
                        isValid = false;
                    }
                })
                return isValid;
            },
            message: "please provide valid image url"
        }
    }],

    price: {
        type: Number,
        require: true,
        min: [0, "price can't be negetive"]
    },

    quantity: {
        type: Number,
        require: true,
        min: [0, "quantity can't be negetive"]
    },

    category: {
        type: String,
        require: true
    },

    brand: {
        name: {
            type: String,
            require: true,
        },
        id: {
            type: ObjectId,
            ref: "Brand",
            require: true
        }
    },

    status: {
        type: String,
        require: true,
        enum: {
            value: ["in-stock", "out-of-stock", "discontinue"],
            message: "status can not be {VALUE}"
        }
    },

    store: {
        name: {
            type: String,
            trim: true,
            require: [true, "please provide a store name"],
            lowercase: true,
            enum: {
                values: ["Dahka", "Chattogram", "Rajshahi", "Khulna", "Rangpur", "Sylhet"],
                message: "{VALUE} is not a valid name"
            }
        },
        id: {
            type: ObjectId,
            require: true,
            ref: "Store"
        }
    },

    suppliedBy: {
        name: {
            type: String,
            trim: true,
            require: [true, "plase provide a supplier name"]
        },
        id: {
            type: ObjectId,
            ref: "Supplier"
        }
    }
}, {
    timestamps: true
});

// befoer saving data item will be added

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;