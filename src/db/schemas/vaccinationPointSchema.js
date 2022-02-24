const { Schema } = require("mongoose");

const VaccinationPointSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    coordinates: [{ type: Number }],
    address: { type: String, required: true },
  },
  vaccines: [{ type: Schema.Types.ObjectId, ref: "Vaccine" }],
});

module.exports = VaccinationPointSchema;
