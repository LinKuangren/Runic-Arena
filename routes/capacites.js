var express = require("express");
var router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/', async function(req, res, next) {
    const capacites = await prisma.capacite.findMany()
    res.send(capacites);
});


router.post('/new-capacites', async function(req, res){
    const { name, description } = req.body;

    const capacites = await prisma.capacite.create({
        data: { name, description },
    });

    res.status(200).json({ message: 'Nouvelle capacite ajouté.'})
});


router.delete("/:id", async function (req, res) {
    const capacites = await prisma.capacite.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });

    res.status(200).json({ message: `La capacite est supprimé.` });
});

router.get('/:id', async function(req, res){
    const capacites = await prisma.capacite.findUnique({
        where: {
            id: parseInt(req.params.id)
        },
    });

    res.send(capacites);
});
 
router.put("/:id", async function (req, res) {
    const { name, description } = req.body;

    const capacites = await prisma.capacite.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: { name, description },
    });

    res.status(200).json({ message: `La capacite est modifié.` });
});

module.exports = router;