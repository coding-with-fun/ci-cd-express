const express = require("express");

const app = express();

app.get("/api/", (req, res) => {
  res.send("This is root route");
});

app.get("/api/profile", (req, res) => {
  res.send("This is profile route");
});

app.get("/api/about", (req, res) => {
  res.send("This is about route");
});

app.listen(5000, () => {
  console.log("App is running on port 5000");
});
