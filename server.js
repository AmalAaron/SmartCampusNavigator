const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/home.html", (req, res) => res.sendFile(path.join(__dirname, "home.html")));
app.get("/profile.html", (req, res) => res.sendFile(path.join(__dirname, "profile.html")));

app.listen(PORT, () => console.log('Server running at http://localhost:${PORT}'));