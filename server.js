const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const { Connection } = require("./config/databaseConnection");
const { AuthRouter } = require("./Routes/auth.route");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.get("/", (req, res) => {
  res.send("Hello there, your on home route");
});
app.use("/auth", AuthRouter);

app.listen(PORT, async () => {
  try {
    await Connection;
    console.log("database connected succesfully");
  } catch (err) {
    console.log("error from db");
    console.log(err.message);
  }
  console.log("listening on port no", PORT);
});
