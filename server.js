const express = require("express");
const app = express();
var cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// ROUTERS
const globalRouter = require("./routes/global.js");
const blogRouter = require("./routes/blog.js");

// ROUTES
app.use("/", globalRouter);
app.use("/blog", blogRouter);

// SERVER
const hostname = "127.0.0.1";
const port = process.env.PORT || 5000;

app.listen(port, hostname, () => {
  console.log(`Serveur demarré sur http://${hostname}:${port}`);
});
