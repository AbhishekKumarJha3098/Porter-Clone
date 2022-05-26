const {
    Schema,
    model
} = require("mongoose");

const enterpriseSchema = new Schema({

 
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
 
    email: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    }


}, {
    versionKey: false,
    timestamps: true,
});

const Packer = model("enterpriser", enterpriseSchema);

module.exports = Packer;
