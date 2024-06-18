const startDB = require("./Mongodb");

class Loaders {
  start() {
    startDB();
  }
}
module.exports = new Loaders();
