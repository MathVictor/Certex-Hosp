const router = require('express').Router();
const Hospital = require('../models/Hospital');

router.post('/', async (req, res) => {
    
    const {
        NOME,
        CNPJ,
        ENDERECO,
        CONTATO,
    } = req.body;

    const hospital = {
        NOME,
        CNPJ,
        ENDERECO,
        CONTATO,
    }

    if (!NOME || !CNPJ || !ENDERECO || !CONTATO) {
        res.status(422).json({error: "Parameter Missing"});
        return;
    }
    try {
        await Hospital.create(hospital);
        res.status(201).json({ message: 'Hospital registrado com sucesso'});
        return;

    } catch (err) {
        res.status(500).json({"error": err});
        return;
    }
});

module.exports = router;