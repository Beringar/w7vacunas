const { model, Schema } = require("mongoose");
const VaccinationPointSchema = require("../schemas/vaccinationPointSchema");

const UserSchema = new Schema({
  dni: {
    type: String,
    required: true,
  },
  vaccinationPoint: {
    type: VaccinationPointSchema,
  },
  vaccine: { type: Schema.Types.ObjectId, ref: "Vaccine", required: true },
  doses: [{ type: Date }],
});

const User = model("User", UserSchema, "Users");

module.exports = User;
