const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware.js");
const dotenv = require("dotenv").config();
const colors = require("colors");
const port = process.env.PORT || 8000;
const router = require("./routes/goalsRoutes.js");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", router);

app.use(errorHandler);

app.listen(port, () => console.log("listening on port " + port));
