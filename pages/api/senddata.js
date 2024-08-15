import connectMongo from "@/lib/mongodb";
import Deduction from "@/models/Deduction";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectMongo();

    const { deduction } = req.body;

    try {
      const newDeduction = new Deduction({ deduction });
      await newDeduction.save();
      res.status(201).json({ message: "Deduction saved successfully" });
    } catch (error) {
      res.status(400).json({ error: "Error saving deduction" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
