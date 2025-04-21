const express = require("express");
const router = express.Router();
const { Colaborador } = require("../models/index.js");
const { body, validationResult } = require("express-validator");
const ColaboradorService = require("../services/colaboradores.js");

const colaboradorService = new ColaboradorService(Colaborador);

router.get("/", async (req, res) => {
    try {
        const colaboradores = await colaboradorService.get();
        res.status(200).json(colaboradores);
    } catch (error) {
        res.status(500).send("Erro ao buscar colaboradores: " + error.message);
    }
});

router.post(
    "/",
    [
        body("cpf").notEmpty().withMessage("O campo CPF é obrigatório."),
        body("name").notEmpty().withMessage("O campo nome é obrigatório."),
        body("ownerCpf").notEmpty().withMessage("O campo CPF do administrador é obrigatório.")
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { cpf, name, ownerCpf } = req.body;
            await colaboradorService.adicionar({ cpf, name, ownerCpf });
            res.status(201).send("Colaborador adicionado com sucesso!");
        } catch (error) {
            res.status(400).send("Erro ao adicionar colaborador: " + error.message);
        }
    }
);

router.get("/:cpf", async (req, res) => {
    try {
        const { cpf } = req.params;
        const colaborador = await colaboradorService.getColaboradorByCpf(cpf);
        res.status(200).json(colaborador);
    } catch (error) {
        res.status(404).send("Erro ao buscar colaborador: " + error.message);
    }
});

module.exports = router;