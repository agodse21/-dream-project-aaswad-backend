const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const { Connection } = require("./config/databaseConnection");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// const { UserProfilerouter } = require("./routes/userProfile.router");
// const { loginRouter } = require("./routes/login.router");
// const { signuprouter } = require("./routes/signup.router");
// const { addtoCartRotuer } = require("./routes/addtocart.router");
// const { WomenProductrouter } = require("./routes/womenproduct.router");
// const { menproductRouter } = require("./routes/menproducts.router");

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
