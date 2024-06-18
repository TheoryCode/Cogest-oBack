const mongoose = require("mongoose");
const dotenv = require("dotenv");

async function startDB() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Banco de Dados Inicializado");
}
module.exports = startDB;
