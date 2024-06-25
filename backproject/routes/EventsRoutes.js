const { Router } = require("express");
const EventoController = require("../src/Controllers/EventController");

const rotas = Router();

rotas.post("/", EventoController.create);

module.exports = rotas;
