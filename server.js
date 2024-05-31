const express = require("express");
const favicon = require("serve-favicon");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
require("./config/database");

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(logger("dev"));
app.use(express.json());
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || 3001;

app.use("/api/seasons", require("./routes/api/seasons"));
app.use("/api/divisions", require("./routes/api/divisions"));
app.use("/api/teams", require("./routes/api/teams"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
