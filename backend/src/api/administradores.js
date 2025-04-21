const express = require("express");
const router = express.Router();
const { Administrador } = require("../models/index.js");
const { body, validationResult } = require("express-validator");
const AdministradorService = require("../services/administradores.js");

const administradorService = new AdministradorService(Administrador);

router.get("/", async (req, res) => {
    try {
        const administradores = await administradorService.get();
        res.status(200).json(administradores);
    } catch (error) {
        res.status(500).send("Erro ao buscar administradores: " + error.message);
    }
});

router.post(
    "/",
    [
        body("cpf").notEmpty().withMessage("O campo CPF é obrigatório."),
        body("nome").notEmpty().withMessage("O campo nome é obrigatório.")
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { cpf, nome } = req.body;
            await administradorService.adicionar({ cpf, nome });
            res.status(201).send("Administrador adicionado com sucesso!");
        } catch (error) {
            res.status(400).send("Erro ao adicionar administrador: " + error.message);
        }
    }
);

router.get("/:cpf", async (req, res) => {
    try {
        const { cpf } = req.params;
        const administrador = await administradorService.getAdministradorByCpf(cpf);
        res.status(200).json(administrador);
    } catch (error) {
        res.status(404).send("Erro ao buscar administrador: " + error.message);
    }
});

module.exports = router;