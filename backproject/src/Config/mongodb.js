const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
async function startDB() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Banco de dados inicializado!");
}

module.exports = startDB;
