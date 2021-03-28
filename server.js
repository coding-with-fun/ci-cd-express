const express = require("express");

const app = express();

app.get("/api/", (req, res) => {
  res.send("This is root route").status(200);
});

app.get("/api/profile", (req, res) => {
  res.send("This is profile route").status(200);
});

app.get("/api/about", (req, res) => {
  res.send("This is about route").status(200);
});

app.listen(5000, () => {
  console.log("App is running on port 5000");
});
