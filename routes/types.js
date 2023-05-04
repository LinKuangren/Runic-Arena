var express = require("express");
var router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/', async function(req, res, next) {
    const types = await prisma.type.findMany()
    res.send(types);
});


router.post('/new-types', async function(req, res){
    const { name } = req.body;

    const types = await prisma.type.create({
        data: { name },
    });

    res.status(200).json({ message: 'Nouveau type ajouté.'})
});


router.delete("/:id", async function (req, res) {
    const types = await prisma.type.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });

    res.status(200).json({ message: `Le type est supprimé.` });
});

router.get('/:id', async function(req, res){
    const types = await prisma.type.findUnique({
        where: {
            id: parseInt(req.params.id)
        },
    });

    res.send(types);
});
 
router.put("/:id", async function (req, res) {
    const { name} = req.body;

    const types = await prisma.type.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: { name },
    });

    res.status(200).json({ message: `Le type est modifié.` });
});

module.exports = router;