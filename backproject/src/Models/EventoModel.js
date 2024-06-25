const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  titulo: String,
  imageURL: String,
  descricao: String,
  categoria: String,
});
const EventoModel = mongoose.model("evento", EventSchema);

module.exports = EventoModel;
