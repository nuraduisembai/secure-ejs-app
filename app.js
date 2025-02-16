require("dotenv").config();
const express = require("express");
const mongoose = require("./config/db");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "supersecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
    res.render("index"); // Отобразит файл views/index.ejs
  });
  
// Настройка EJS
app.set("view engine", "ejs");
app.use(express.static("public"));

// Роуты
app.use("/", require("./routes/auth"));
app.use("/tasks", require("./routes/task"));

// Запуск сервера
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
