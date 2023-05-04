const express = require("express");
const app = express();
var cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('front'));

app.use(cors());

// ROUTERS
var globalRouter = require("./routes/global.js");
var competencesRouter = require('./routes/competences');

// ROUTES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", globalRouter);
app.use("/competences", competencesRouter);


// SERVER
const hostname = "127.0.0.1";
const port = 5173;

app.listen(port, hostname, () => {
  console.log(`Serveur demarré sur http://${hostname}:${port}`);
});
