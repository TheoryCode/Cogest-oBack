const EventoModel = require("../Models/EventoModel");

class EventoController {
  async create(req, res) {
    const evento = await EventoModel.create(req.body);

    return res.status(200).json(evento);
  }
  async get(req, res) {}
  async update(req, res) {}
  async delete(req, res) {}
}
module.exports = new EventoController();
