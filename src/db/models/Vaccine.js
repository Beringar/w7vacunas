const { model, Schema } = require("mongoose");

const VaccineSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dose: {
    type: Number,
    required: true,
  },
});

const Vaccine = model("Vaccine", VaccineSchema, "vaccines");

module.exports = Vaccine;
