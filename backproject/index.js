require("dotenv").config({ path: "../.env" });

const app = require("./App");

const startDB = require("./src/Config/mongodb");

startDB();

app.listen(process.env.PORT);
