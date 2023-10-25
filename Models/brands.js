const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "please provid brand name"],
        minLength: [3, "Name must be at list 3 characters"],
        maxLength: [100, "Name has been over characters"],
        unique: true,
        lowercase: true
    },

    description: String,
    email: {
        type: String,
        validate: [validator.isURL, "please provide a valid url"]
    },

    website: {
        type: String,
        validate: [validator.isURL, "please provide a valid url"]
    },

    location: String,

    products: [{
        type: ObjectId,
        ref: "Product"
    }],

    suppliers: [{
        name: String,
        contanctNumber: String,
        id: {
            type: ObjectId,
            ref: "suppliers"
        }
    }],

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: "active"
    }
}, {
    timestamps: true
});

const Brand = mongoose.model("Brand", brandSchema)

exports = Brand;