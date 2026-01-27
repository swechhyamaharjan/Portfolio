import nodemailer from "nodemailer";
import dotenv from "dotenv";
import Cors from "cors";

dotenv.config();

// Initialize CORS middleware
const cors = Cors({
  origin: process.env.FRONTEND_URL,
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
});

// Helper to run middleware in serverless functions
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run CORS
  await runMiddleware(req, res, cors);

  // Handle preflight OPTIONS
  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `<h3>Name: ${name}</h3><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
