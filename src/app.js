const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/usuarioRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/usuarios", userRoutes);

module.exports = app;