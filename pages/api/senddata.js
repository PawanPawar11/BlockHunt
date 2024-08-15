import connectMongo from "@/lib/mongodb";
import Deduction from "@/models/Deduction";

// Function to check if user's deduction is correct
const isDeductionCorrect = (userDeduction, correctAnswer) => {
  return (
    userDeduction.trim().toLowerCase() === correctAnswer.trim().toLowerCase()
  );
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectMongo();

    const { deduction } = req.body;
    const correctAnswer = "Vincent “Vince” Caruso"; // Set this dynamically based on the mystery case

    try {
      // Save the deduction and correct answer to the database
      const newDeduction = new Deduction({ deduction, correctAnswer });
      await newDeduction.save();

      // Check if the user's deduction is correct
      const isCorrect = isDeductionCorrect(deduction, correctAnswer);

      res
        .status(201)
        .json({ message: "Deduction saved successfully", correct: isCorrect });
    } catch (error) {
      res.status(400).json({ error: "Error saving deduction" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
