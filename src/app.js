const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/usuarioRoutes");
const medicoRoutes = require("./routes/medicoRoutes");
const pacienteRoutes = require("./routes/pacienteRoutes");
const guiaRoutes = require("./routes/guiaRoutes");
const especialidadeRoutes = require("./routes/especialidadeRoutes");
const consultaRoutes = require("./routes/consultaRoutes");
const agendaMedicoRoutes = require("./routes/agendaMedicoRoutes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/usuarios", userRoutes);
app.use("/medicos", medicoRoutes);
app.use("/pacientes", pacienteRoutes);
app.use("/guias", guiaRoutes);
app.use("/especialidades", especialidadeRoutes);
app.use("/consultas", consultaRoutes);
app.use("/agenda-medicos", agendaMedicoRoutes);

module.exports = app;