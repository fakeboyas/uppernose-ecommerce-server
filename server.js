const express = require("express");
const app = express();
const cors = require("cors");

const { db, PORT } = require("./config");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to rest api");
});

app.get("*", (req, res) => {
  res.send("404 Page Not Found");
});

app.get("/product", require("./routes/Product"));

if (db) {
  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
}
