import mongoose from "mongoose";

const DeductionSchema = new mongoose.Schema({
  deduction: {
    type: String,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
});

const Deduction =
  mongoose.models.Deduction || mongoose.model("Deduction", DeductionSchema);

export default Deduction;
