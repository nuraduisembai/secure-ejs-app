
Student: Duisembay Nurassyl,Serikkali Raiymbek, Bekesh Madi
Group: IT-2303

Render: https://secure-ejs-app.onrender.com
.env:
MONGO_URI=mongodb+srv://nuraduisembai:nurasil2004@assignment4.zwcvc.mongodb.net/?retryWrites=true&w=majority&appName=Assignment4
JWT_SECRET=aadab97057e7cd65fc45d175e0d886389766e33b1fe71085ad6ede3ba9b5958b
SESSION_SECRET=121903bb-770a-41f3-ac0f-00d7e8b4a50f
PORT=5050

github: https://github.com/nuraduisembai/secure-ejs-app





📌 Secure Task Manager

📖 Описание

Secure Task Manager — это веб-приложение для управления задачами с аутентификацией пользователей и безопасным хранением данных в MongoDB Atlas. Реализованы функции регистрации, авторизации, создания, просмотра и удаления задач.

🚀 Установка и запуск

1️⃣ Клонирование репозитория

git clone https://github.com/твой-юзернейм/твой-репозиторий.git
cd твой-репозиторий

2️⃣ Установка зависимостей

npm install

3️⃣ Настройка переменных окружения

Создай файл .env в корневой папке и добавь:

MONGO_URI=твоя_ссылка_на_MongoDB_Atlas
JWT_SECRET=supersecretkey
SESSION_SECRET=anothersecretkey
PORT=5050

4️⃣ Запуск проекта

node app.js

Или с автообновлением:

npx nodemon app.js

Приложение будет доступно по адресу http://localhost:5050.

📂 Структура проекта

/secure-ejs-app
├── models/        # Модели MongoDB (User, Task)
├── routes/        # Маршруты (auth, task)
├── views/         # Шаблоны EJS
├── public/        # Статические файлы
├── config/        # Конфигурация базы данных
├── .env           # Переменные окружения
├── app.js         # Главный файл
├── README.md      # Документация

🛠 Возможные ошибки

Порт занят → Измени PORT в .env:

PORT=5051

Проблемы с bcrypt → Удали bcrypt, установи bcryptjs:

npm uninstall bcrypt
npm install bcryptjs

🌍 Деплой на Render

Загрузи код на GitHub

Перейди в Render

Создай New Web Service, выбери репозиторий

Укажи Build Command:

npm install

Укажи Start Command:

node app.js

Добавь переменные окружения MONGO_URI, JWT_SECRET, SESSION_SECRET

Дождись завершения деплоя и используй выданную ссылку 🌍

