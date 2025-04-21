const express = require("express");
const router = express.Router();
const { Telefone } = require("../models/index.js");
const { body, validationResult } = require("express-validator");
const TelefoneService = require("../services/telefones.js");

const telefoneService = new TelefoneService(Telefone);

router.get("/", async (req, res) => {
    try {
        const telefones = await telefoneService.get();
        res.status(200).json(telefones);
    } catch (error) {
        res.status(500).send("Erro ao buscar telefones: " + error.message);
    }
});

router.post(
    "/",
    [
        body("telefone").notEmpty().withMessage("O campo telefone é obrigatório."),
        body("clienteCpf").notEmpty().withMessage("O campo CPF do cliente é obrigatório.")
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { telefone, clienteCpf } = req.body;
            await telefoneService.adicionar({ telefone, clienteCpf });
            res.status(201).send("Telefone adicionado com sucesso!");
        } catch (error) {
            res.status(400).send("Erro ao adicionar telefone: " + error.message);
        }
    }
);

router.get("/:clienteCpf", async (req, res) => {
    try {
        const { clienteCpf } = req.params;
        const telefones = await telefoneService.getTelefonesByClienteCpf(clienteCpf);
        res.status(200).json(telefones);
    } catch (error) {
        res.status(404).send("Erro ao buscar telefones: " + error.message);
    }
});

module.exports = router;