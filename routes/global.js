const express = require("express");
const router = express.Router();

// PRISMA CLIENT
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/card", function (req, res) {
  async function main() {
    const card = await prisma.card.create({
      data: {
        name: req.body.name,
        illustration: req.body.illustration,
        // power: req.body.power,
      },
    });
  }

  main()
    .then(async () => {
      res.json("ok");
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      res.json("err");
      await prisma.$disconnect();
    });
});

module.exports = router;
