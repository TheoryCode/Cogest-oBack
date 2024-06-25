const { Ruter } = require("express");

const rotas = require("./EventsRoutes");

const routes = Router();

routes.use("/events", rotas);

module.exports = routes;
