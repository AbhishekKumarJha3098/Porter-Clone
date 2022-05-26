const {
    Schema,
    model
} = require("mongoose");

const estimateSchema = new Schema({


    cityname: {
        type: String,
        required: true
    },
    pickupname: {
        type: String,
        required: true
    },
    dropoffname: {
        type: String,
        required: true
    },

    mobno: {
        type: Number,
        required: true
    },
      name: {
          type: String,
          required: true
      },
    require: {
        type: String,
        required: true
    }


}, {
    versionKey: false,
    timestamps: true,
});

const Packer = model("estimate", estimateSchema);

module.exports = Packer;
