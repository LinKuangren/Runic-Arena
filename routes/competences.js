var express = require("express");
var router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/', async function(req, res, next) {
    const competences = await prisma.competence.findMany()
    res.send(competences);
});


router.post('/new-competences', async function(req, res){
    const { name, description } = req.body;

    const competences = await prisma.competence.create({
        data: { name, description },
    });

    res.status(200).json({ message: 'Nouvelle compétence ajouté.'})
});


router.delete("/:id", async function (req, res) {
    const competences = await prisma.competence.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });

    res.status(200).json({ message: `La compétence est supprimé.` });
});

 
router.put("/edit/:id", async function (req, res) {
    const { name, description } = req.body;

    const competences = await prisma.competence.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: { name, description },
    });

    res.status(200).json({ message: `La compétence est modifié.` });
});

module.exports = router;