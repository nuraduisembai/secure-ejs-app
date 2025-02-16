const express = require("express");
const Task = require("../models/Task");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

// Получение всех задач (только для авторизованных пользователей)
router.get("/", authMiddleware, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.render("tasks", { tasks });
});

// Добавление новой задачи
router.post("/add", authMiddleware, async (req, res) => {
  const { title, description } = req.body;
  await new Task({ title, description, user: req.user.id }).save();
  res.redirect("/tasks");
});

// Удаление задачи
router.post("/delete/:id", authMiddleware, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/tasks");
});

module.exports = router;
