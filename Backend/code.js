const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection string
mongoose.connect("mongodb://localhost:27017/usersdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmationCode: { type: String },
  isVerified: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

// Sign-Up Route
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  // Hardcoded SMTP credentials
  const smtpEmail = "phethiso2.0@outlook.com"; // Replace with your Outlook email
  const smtpPassword = "phethi0616"; // Replace with your Outlook password

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const confirmationCode = Math.floor(100000 + Math.random() * 900000).toString();

    user = new User({
      username,
      email,
      password: hashedPassword,
      confirmationCode,
    });

    await user.save();

    await sendConfirmationEmail(email, confirmationCode, smtpEmail, smtpPassword);

    res.status(201).json({ message: "User registered, confirmation code sent to email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Function to send confirmation email using Outlook SMTP
async function sendConfirmationEmail(email, confirmationCode, smtpEmail, smtpPassword) {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: smtpEmail,
      pass: smtpPassword,
    },
  });

  const mailOptions = {
    from: smtpEmail,
    to: email,
    subject: "Confirmation Code",
    text: `Your confirmation code is: ${confirmationCode}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

// Verify Code Route
app.post("/verify-code", async (req, res) => {
  const { email, code } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (user.confirmationCode === code) {
      user.isVerified = true;
      await user.save();
      return res.status(200).json({ message: "Code verified successfully." });
    } else {
      return res.status(400).json({ message: "Invalid confirmation code." });
    }
  } catch (error) {
    console.error("Error verifying code:", error);
    res.status(500).json({ message: "Server error." });
  }
});

// Resend Code Route
app.post("/resend-code", async (req, res) => {
  const { email } = req.body;

  // Hardcoded SMTP credentials
  const smtpEmail = "phethiso2.0@outlook.com"; // Replace with your Outlook email
  const smtpPassword = "phethi0616"; // Replace with your Outlook password

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Generate a new confirmation code
    const newConfirmationCode = Math.floor(100000 + Math.random() * 900000).toString();
    user.confirmationCode = newConfirmationCode;
    await user.save();

    await sendConfirmationEmail(email, newConfirmationCode, smtpEmail, smtpPassword);

    res.status(200).json({ message: "New confirmation code sent." });
  } catch (error) {
    console.error("Error resending code:", error);
    res.status(500).json({ message: "Server error." });
  }
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
