const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const pandascoreRoutes = require("./routes/pandascore.routes");

app.use(express.json());
app.use("/api", pandascoreRoutes);

app.get("/", (req, res) => {
  res.send("Pandascore API backend is running.");
});

module.exports = app;
