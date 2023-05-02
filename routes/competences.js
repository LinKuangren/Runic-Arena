var express = require("express");
var router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/', async function(req, res, next) {
    const competences = await prisma.competence.findMany()
    res.send(competences);
});

router.post('/', async function(req, res){
        const competences = await prisma.competence.create({
            data: {
                name: req.body.name,
                description: req.body.description,
            }
        });

        res.status(200).json({ message: 'Nouvelle compétence ajouté.'})
});

module.exports = router;