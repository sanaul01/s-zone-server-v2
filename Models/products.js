const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        minLength: [3, "Name must be at least 3 character"],
        maxLength: [100, "Name is too larger"]
    },

    description: {
        type: String,
        required: true
    },

    unit: {
        type: String,
        required: true,
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
            required: true
        }
    }
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;