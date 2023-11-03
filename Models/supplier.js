const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const supplierSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
        lowercase: true,
        minLength: [3, "Name must be at least 3 characters"],
        maxLeangth: [100, "Name is too larges"]
    },

    email: {
        type: String,
        validate: [validator.isEmail, "Provide a valid Email"],
        trim: true,
        lowercase: true,
        unique: true
    },

    brand: {
        name: {
            type: String,
            trim: true,
            required: true
        },
        id: {
            type: ObjectId,
            required: true,
            ref: "Brand"
        }
    },

    contactNumber: [{
        type: String,
        required: [true, "Please porvide a contact Number"],
        validate: {
            validator: (value) => {
                return validator.isMobaliPhone(value)
            },
            message: "Please provide a valid phoneNumber"
        }
    }],

    emergencyContactNumber: {
        type: String,
        required: [true, "Please porvide a contact Number"],
        validate: {
            validator: (value) => {
                return validator.isMobaliPhone(value)
            },
            message: "Please provide a valid phoneNumber"
        }
    },

    tradeLicenceNumber: {
        type: Number,
        required: [true, "Please provide a licence Number"]
    },

    presentAdderss: {
        type: String,
        required: [true, "Please provide your present adderss"]
    },

    permanentAdderss: {
        type: String,
        required: [true, "Please provide your permanent adderss"]
    },

    location: {
        type: String,
        required: true,
        lowercase: true,
        enum: {
            values: ["Dhaka", "Rajshahi", "Chattogram", "Sylhet", "Khulna", "Brishal", "Rangpur", "Mymensingh"],
            message: "{VALUE} is not accurate division"
        }
    },

    imageURL: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"]
    },

    nationalIdImageURL: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"]
    },

    status: {
        type: String,
        default: "active",
        enum: ["active", "inactive"]
    },

    // createdAt: {
    //     type: String,
    //     default: Date.now(),
    //     select: 0
    // },

    // updatedAt: {
    //     type: String,
    //     default: Date.now(),
    //     select: 0
    // },

}, {
    timestamps: true
});

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;