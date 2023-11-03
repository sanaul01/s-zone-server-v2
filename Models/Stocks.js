const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const stockSchema = mongoose.Schema({
    productId: {
        type: ObjectId,
        required: true,
        ref: "Product"
    },

    name: {
        type: String,
        required: [true, "please provied a name for this products"],
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
        required: true,
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
        required: true,
        min: [0, "price can't be negetive"]
    },

    quantity: {
        type: Number,
        required: true,
        min: [0, "quantity can't be negetive"]
    },

    category: {
        type: String,
        required: true
    },

    brand: {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: ObjectId,
            ref: "Brand",
            require: true
        }
    },

    status: {
        type: String,
        required: true,
        enum: {
            value: ["in-stock", "out-of-stock", "discontinue"],
            message: "status can not be {VALUE}"
        }
    },

    store: {
        name: {
            type: String,
            trim: true,
            required: [true, "please provide a store name"],
            lowercase: true,
            enum: {
                values: ["Dahka", "Chattogram", "Rajshahi", "Khulna", "Rangpur", "Sylhet"],
                message: "{VALUE} is not a valid name"
            }
        },
        id: {
            type: ObjectId,
            required: true,
            ref: "Store"
        }
    },

    suppliedBy: {
        name: {
            type: String,
            trim: true,
            required: [true, "plase provide a supplier name"]
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