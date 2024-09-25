const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const cors = require("cors");
const os = require("os");
const crypto = require("crypto");

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

  // Log to check if SMTP email and password are retrieved correctly
  console.log("SMTP Email:", smtpEmail);
  console.log("SMTP Password:", smtpPassword);

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
      user: smtpEmail,     // User's Outlook email
      pass: smtpPassword,  // User's Outlook password
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

// Utility to get the local IP address
const getLocalIP = () => {
  const networkInterfaces = os.networkInterfaces();
  for (const interfaceKey in networkInterfaces) {
    const iface = networkInterfaces[interfaceKey].find(
      (details) => details.family === "IPv4" && !details.internal
    );
    if (iface) return iface.address;
  }
  return "localhost";
};

// Server setup
const PORT = 4000;
const localIP = getLocalIP();
app.listen(PORT, () => console.log(`Server running on ${localIP}:${PORT}`));
