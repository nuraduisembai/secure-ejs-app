const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

// 🔹 Страница регистрации (GET)
router.get("/register", (req, res) => {
  res.render("register"); // Отображает views/register.ejs
});

// 🔹 Страница входа (GET)
router.get("/login", (req, res) => {
  res.render("login"); // Отображает views/login.ejs
});

// 🔹 Обработка регистрации (POST)
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).send("Email уже зарегистрирован");

    user = new User({ name, email, password });
    await user.save();
    res.redirect("/login");
  } catch (err) {
    res.status(500).send("Ошибка сервера");
  }
});

// 🔹 Обработка входа (POST)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("Неверный email или пароль");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Неверный email или пароль");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/tasks");
  } catch (err) {
    res.status(500).send("Ошибка сервера");
  }
});

module.exports = router;
