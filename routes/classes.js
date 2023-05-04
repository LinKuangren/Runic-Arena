var express = require("express");
var router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/', async function(req, res, next) {
    const classes = await prisma.classe.findMany()
    res.send(classes);
});


router.post('/new-classes', async function(req, res){
    const { name } = req.body;

    const classes = await prisma.classe.create({
        data: { name },
    });

    res.status(200).json({ message: 'Nouvelle classe ajouté.'})
});


router.delete("/:id", async function (req, res) {
    const classes = await prisma.classe.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });

    res.status(200).json({ message: `La classe est supprimé.` });
});

router.get('/:id', async function(req, res){
    const classes = await prisma.classe.findUnique({
        where: {
            id: parseInt(req.params.id)
        },
    });

    res.send(classes);
});
 
router.put("/:id", async function (req, res) {
    const { name} = req.body;

    const classes = await prisma.classe.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: { name },
    });

    res.status(200).json({ message: `La classe est modifié.` });
});

module.exports = router;