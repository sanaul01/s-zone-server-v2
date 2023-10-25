const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const storeSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: [true, "please provide a name"],
        lowercase: true,
        enum: {
            values: ["Dahka", "Chattogram", "Rajshahi", "Khulna", "Rangpur", "Sylhet"],
            message: "{VALUE} is not a valid name"
        }
    },

    description: String,

    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },

    maneger: {
        name: String,
        contactNumber: String,
        id: {
            type: ObjectId,
            ref: "User"
        }
    }
}, {
    timestamps: true
});

const Store = mongoose.model("Store", storeSchema);

exports = Store;