const {
    Schema,
    model
} = require("mongoose");

const productSchema = new Schema({
 
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    movingdate: {
        type: String,
        required:true
    },
    movingto: {
        type: String,
        required: true
    },
    shiftingdate: {
        type: String,
        required: true
    }



}, {
    versionKey: false,
    timestamps: true,
});

const Packer = model("packer", productSchema);

module.exports = Packer;
