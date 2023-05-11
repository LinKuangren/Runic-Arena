var express = require("express");
// IMAGE UPLOAD
const multer = require("multer");

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Format invalide"));
    }
    cb(undefined, true);
  },
});
const sharp = require("sharp");
// ==================================

var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async function (req, res, next) {
  const cartes = await prisma.carte.findMany();
  res.send(cartes);
});

router.post("/new-cartes", async function (req, res) {
  const {
    name,
    illustration,
    typeId,
    classeId,
    power,
    capaciteId,
    competence_1,
    competence_2,
    cost_1,
    cost_2,
    color_1,
    color_2,
    condition,
  } = req.body;

  const new_carte = await prisma.carte.create({
    data: {
      name,
      illustration,
      typeId,
      classeId,
      power,
      capaciteId,
      passiveCondition: condition,
    },
  });
  await prisma.CartesCapacictesActive.create({
    data: {
      carteId: new_carte.id,
      capaciteId: competence_1,
      cost: cost_1,
      color: color_1,
    },
  });
  if (competence_2 != null) {
    await prisma.CartesCapacictesActive.create({
      data: {
        carteId: new_carte.id,
        capaciteId: competence_2,
        cost: cost_2,
        color: color_2,
      },
    });
  }
  res.status(200).json({ message: "Nouvelle carte ajouté." });
});

router.post("/upload", upload.single("file"), async function (req, res) {
  console.log(req.file);
  try {
    await sharp(req.file.buffer)
      .resize(300, 300)
      .toFile(
        appRoot + "/public/images/" + req.file.originalname,
        (err, info) => {
          console.log(err);
        }
      );
    res.status(201).send({ imgName: req.file.originalname });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async function (req, res) {
  const jointure = await prisma.CartesCapacictesActive.deleteMany({
    where: {
      carteId: parseInt(req.params.id),
    },
  });
  const carteDel = await prisma.carte.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });

  res.status(200).json({ message: `La carte est supprimé.` });
});

router.get("/:id", async function (req, res) {
  const cartes = await prisma.carte.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  res.send(cartes);
});

router.put("/:id", async function (req, res) {
  const {
    name,
    illustration,
    typeId,
    classeId,
    power,
    capaciteId,
    competence_1,
    competence_2,
    cost_1,
    cost_2,
    color_1,
    color_2,
    condition,
  } = req.body;

  const cartes = await prisma.carte.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: {
      name,
      illustration,
      typeId,
      classeId,
      power,
      capaciteId,
      passiveCondition: condition,
    },
  });

  res.status(200).json({ message: `La carte est modifié.` });
});

module.exports = router;
