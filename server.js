const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Serve main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Optional: handle form redirect
app.get("home.html", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
