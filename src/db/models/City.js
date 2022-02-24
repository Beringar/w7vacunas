const { model, Schema } = require("mongoose");
const VaccinationPointSchema = require("../schemas/vaccinationPointSchema");

const CitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  vaccinationPoints: [VaccinationPointSchema],
});

const City = model("City", CitySchema, "cities");

module.exports = { City, VaccinationPointSchema };
