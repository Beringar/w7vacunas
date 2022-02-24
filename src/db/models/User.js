const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  dni: {
    type: String,
    required: true,
  },
  vaccinationPoint: {
    type: Schema.Types.ObjectId,
    ref: "VaccinationPoint",
    required: true,
  },
  vaccine: { type: Schema.Types.ObjectId, ref: "Vaccine", required: true },
  doses: [{ type: Date }],
});

const User = model("User", UserSchema, "Users");

module.exports = User;
