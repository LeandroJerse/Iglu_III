const express = require("express");

const clientesRouter = require("./clientes");
const administradoresRouter = require("./administradores");
const agendamentosRouter = require("./agendamentos");
const colaboradoresRouter = require("./colaboradores");
const telefonesRouter = require("./telefones");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Aqui está a API do sistema de agendamento de manicure!");
});

router.use("/clientes", clientesRouter);
router.use("/administradores", administradoresRouter);
router.use("/agendamentos", agendamentosRouter);
router.use("/colaboradores", colaboradoresRouter);
router.use("/telefones", telefonesRouter);

module.exports = router;
