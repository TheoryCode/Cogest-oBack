const app = require("./App");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("Servidor Rodando!"));
