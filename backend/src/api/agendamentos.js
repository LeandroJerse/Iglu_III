const express = require("express");
const router = express.Router();
const { Agendamento } = require("../models/index.js");
const { body, validationResult } = require("express-validator");
const AgendamentoService = require("../services/agendamento.js");

const agendamentoService = new AgendamentoService(Agendamento);

router.get("/", async (req, res) => {
    try {
        const agendamentos = await agendamentoService.get();
        res.status(200).json(agendamentos);
    } catch (error) {
        res.status(500).send("Erro ao buscar agendamentos: " + error.message);
    }
});

router.post(
    "/",
    [
        body("manicure").notEmpty().withMessage("O campo manicure é obrigatório."),
        body("cliente").notEmpty().withMessage("O campo cliente é obrigatório."),
        body("horario").notEmpty().withMessage("O campo horário é obrigatório."),
        body("servicos").notEmpty().withMessage("O campo serviços é obrigatório.")
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { manicure, cliente, horario, servicos } = req.body;
            await agendamentoService.adicionar({ manicure, cliente, horario, servicos });
            res.status(201).send("Agendamento adicionado com sucesso!");
        } catch (error) {
            res.status(400).send("Erro ao adicionar agendamento: " + error.message);
        }
    }
);

router.get("/:manicure", async (req, res) => {
    try {
        const { manicure } = req.params;
        const agendamentos = await agendamentoService.getAgendamentosByManicure(manicure);
        res.status(200).json(agendamentos);
    } catch (error) {
        res.status(404).send("Erro ao buscar agendamentos: " + error.message);
    }
});

module.exports = router;