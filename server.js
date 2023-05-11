const express = require("express");
const app = express();
var cors = require("cors");

var path = require("path");
global.appRoot = path.resolve(__dirname);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cors());

// ROUTERS
var competencesRouter = require("./routes/competences");
var typesRouter = require("./routes/types");
var classesRouter = require("./routes/classes");
var capacitesRouter = require("./routes/capacites");
var cartesRouter = require("./routes/cartes");
var activesRouter = require("./routes/actives");

// ROUTES
app.use("/competences", competencesRouter);
app.use("/types", typesRouter);
app.use("/classes", classesRouter);
app.use("/capacites", capacitesRouter);
app.use("/cartes", cartesRouter);
app.use("/actives", activesRouter);

// SERVER
const hostname = "127.0.0.1";
const port = 5173;

app.listen(port, hostname, () => {
  console.log(`Serveur demarré sur http://${hostname}:${port}`);
});
