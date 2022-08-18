import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  try {
    const data = req.body;
    const { email, password } = data;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({
        message: "invalid email or password is less then 7 characters long.",
      });
      return;
    }
    const hashedPassword = await hashPassword(password);

    const client = await connectToDatabase();
    const db = client.db();

    const existing = await db.collection("user").findOne({ email: email });

    if (existing) {
      res.status(422).json({ message: "User already exits!" });
      client.close();
      return;
    }

    const result = await db.collection("user").insertOne({
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Created user!" });
    client.close();
  } catch (error) {
    console.log("signup: " + error);
  }
}

export default handler;
