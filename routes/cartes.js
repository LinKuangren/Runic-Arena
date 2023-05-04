var express = require("express");
var router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/', async function(req, res, next) {
    const cartes = await prisma.carte.findMany()
    res.send(cartes);
});


router.post('/new-cartes', async function(req, res){
    const { name, illustration, type, classe, power, capacite, cost, color, description } = req.body;

    const cartes = await prisma.carte.create({
        data: { name, illustration, type, classe, power, capacite,cost, color, description },
    });

    res.status(200).json({ message: 'Nouvelle carte ajouté.'})
});


router.delete("/:id", async function (req, res) {
    const carte = await prisma.competence.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });

    res.status(200).json({ message: `La carte est supprimé.` });
});

router.get('/:id', async function(req, res){
    const cartes = await prisma.carte.findUnique({
        where: {
            id: parseInt(req.params.id)
        },
    });

    res.send(cartes);
});
 
router.put("/:id", async function (req, res) {
    const { name, illustration, type, classe, power, capacite,cost, color, description } = req.body;

    const cartes = await prisma.carte.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: { name, illustration, type, classe, power, capacite,cost, color, description },
    });

    res.status(200).json({ message: `La carte est modifié.` });
});

module.exports = router;