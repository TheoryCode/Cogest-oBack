const express = require("express");
const rotas = require("./routes/EventsRoutes");
const app = express();
app.use(express.json());
app.use(rotas);
app.use(express.urlencoded({ extended: true }));

module.exports = app;
