const express = require("express");
const router = express.Router();
const { Cliente } = require("../models/index.js");
const { body, validationResult } = require("express-validator");
const ClienteService = require("../services/clientes.js");

const clienteService = new ClienteService(Cliente);

router.get("/", async (req, res) => {
    try {
        const clientes = await clienteService.get();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).send("Erro ao buscar clientes: " + error.message);
    }
});

router.post(
    "/",
    [
        body("cpf").notEmpty().withMessage("O campo CPF é obrigatório."),
        body("nome").notEmpty().withMessage("O campo nome é obrigatório.")
    ],
    async (req, res) => {
        // Validação dos dados de entrada
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { cpf, nome } = req.body;

            await clienteService.adicionar({ cpf, nome });

            res.status(201).send("Cliente adicionado com sucesso!");
        } catch (error) {
            res.status(400).send("Erro ao adicionar cliente: " + error.message);
        }
    }
);

router.get("/:cpf", async (req, res) => {
    try {
        const { cpf } = req.params;
        const cliente = await clienteService.getClienteByCpf(cpf);
        res.status(200).json(cliente);
    } catch (error) {
        res.status(404).send("Erro ao buscar cliente: " + error.message);
    }
});

module.exports = router;
