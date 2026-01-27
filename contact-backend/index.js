import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import serverless from "serverless-http";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/sendContact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }


    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,   
        pass: process.env.EMAIL_PASS    
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `<h3>Name: ${name}</h3><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Function crashed:", err);  
    return res.status(500).json({ message: "Internal server error" });
  }
});


// Export the app wrapped for Vercel
export const handler = serverless(app);
