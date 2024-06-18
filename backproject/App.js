const express = require("express");
const rotas = require("./routes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(rotas);
app.use(express.json());

module.exports = app;
