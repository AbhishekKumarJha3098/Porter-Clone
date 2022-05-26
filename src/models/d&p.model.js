const {
    Schema,
    model
} = require("mongoose");

const dandpSchema = new Schema({


    name: {
        type: String,
        required: true
    },

    contact: {
        type: Number,
        required: true
    },

    city: {
        type:String,
        required: true
    },
    rentaltype: {
        type: String,
        required: true
    },
       hear: {
           type: String,
           required: true
       }



}, {
    versionKey: false,
    timestamps: true,
});

const Packer = model("driver", dandpSchema);

module.exports = Packer;
