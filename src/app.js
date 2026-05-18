const express = require("express");
const cors = require("cors");

// ======================
// ROTAS PRINCIPAIS
// ======================
const userRoutes = require("./routes/usuarioRoutes");
const medicoRoutes = require("./routes/medicoRoutes");
const pacienteRoutes = require("./routes/pacienteRoutes");
const categoriaExameRoutes = require("./routes/categoriaExameRoutes");
const tipoExameRoutes = require("./routes/tipoExameRoutes");
const agendamentoExameRoutes = require("./routes/agendamentoExameRoutes");

const authMiddleware = require("./middlewares/authMiddleware");
const requireRole = require("./middlewares/roleMiddleware");

<<<<<<< HEAD
// ======================
// NOVAS ROTAS
// ======================
const avatarRoutes = require("./routes/avatarRoutes");
const notificacaoRoutes = require("./routes/notificacaoRoutes");
const configuracaoRoutes = require("./routes/configuracaoRoutes");

=======
>>>>>>> c117d01 (Implementa agendamento dinâmico de exames)
const app = express();

// ======================
// MIDDLEWARES
// ======================
app.use(cors());
app.use(express.json());

// ======================
// ROTAS DA API
// ======================
app.use("/usuarios", userRoutes);
app.use("/medicos", authMiddleware, requireRole("admin"), medicoRoutes);
app.use("/pacientes", authMiddleware, requireRole("admin"), pacienteRoutes);
app.use("/categorias-exames", categoriaExameRoutes);
app.use("/tipos-exames", tipoExameRoutes);
app.use("/agendamentos-exames", agendamentoExameRoutes);

<<<<<<< HEAD
module.exports = app;
=======
// ======================
// ROTAS CONFIGURAÇÕES
// ======================
app.use("/configuracoes", avatarRoutes);
app.use("/configuracoes", notificacaoRoutes);
app.use("/configuracoes", configuracaoRoutes);

// ======================
// TESTE API
// ======================
app.get("/", (req, res) => {
  res.send("API Nami funcionando!");
});

module.exports = app;
>>>>>>> c7b8e3a (backend funcionando)
