const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//routes

//shoe -->
const sneakersRouter = require("./api/routes/sneakers/index");
const userRouter = require("./api/routes/registration/login");

//future registration -->

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/sneakers", sneakersRouter);
app.use("/api", userRouter);

const uriDb = process.env.MONGO_DB_HOST;

const connection = mongoose.connect(uriDb);
connection
  .then(() => {
    app.listen(process.env.PORT, function () {
      console.log(`Server running. Use our API on port:${process.env.PORT}`);
    });
  })
  .catch((err) =>
    console.log(`Server not running. Error message: ${err.message}`)
  );

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
