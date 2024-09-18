const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/usersdb", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// User schema and model
const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Register endpoint
app.post("/register", async (req, res) => {
	const { email, password } = req.body;

	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new User({ email, password: hashedPassword });
		await user.save();
		res.status(201).json({ message: "User created successfully" });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Login endpoint
app.post("/login", async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: "User not found" });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		const token = jwt.sign({ id: user._id }, "secretkey", {
			expiresIn: "1h",
		});

		res.json({ token });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Display IP Address and start server
app.listen(5000, () => {
	const interfaces = os.networkInterfaces();
	for (const name of Object.keys(interfaces)) {
		for (const net of interfaces[name]) {
			// Ensure the address is IPv4 and not internal (e.g., localhost)
			if (net.family === 'IPv4' && !net.internal) {
				console.log(`Server running at http://${net.address}:5000`);
			}
		}
	}
});
