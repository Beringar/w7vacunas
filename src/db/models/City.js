const { model, Schema } = require("mongoose");

const CitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  vaccinationPoints: [
    { type: Schema.Types.ObjectId, ref: "VaccionationPoint" },
  ],
});

const City = model("City", CitySchema, "cities");

module.exports = City;
