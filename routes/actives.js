var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async function (req, res, next) {
  const actives = await prisma.CartesCapacictesActive.findMany();
  res.send(actives);
});

module.exports = router;
