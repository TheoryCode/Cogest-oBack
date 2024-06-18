const { Router } = require("express");
const EventoController = require("../backproject/src/Controllers/EventoController");

const rotas = Router();

rotas.post("/eventos", EventoController.create);

module.exports = rotas;
