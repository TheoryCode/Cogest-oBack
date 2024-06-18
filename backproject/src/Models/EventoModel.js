const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventoSchema = new Schema({
  titulo: String,
  imageURL: String,
  descricao: String,
  categoria: String,
});
const EventoModel = mongoose.model("evento", EventoSchema);

module.exports = EventoModel;
