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
const authMiddleware = require("./middlewares/authMiddleware");
const requireRole = require("./middlewares/roleMiddleware");

// ======================
// NOVAS ROTAS
// ======================
const avatarRoutes = require("./routes/avatarRoutes");
const notificacaoRoutes = require("./routes/notificacaoRoutes");
const configuracaoRoutes = require("./routes/configuracaoRoutes");

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
app.use("/categorias-exames", authMiddleware, requireRole("admin"), categoriaExameRoutes);
app.use("/tipos-exames", authMiddleware, requireRole("admin"), tipoExameRoutes);

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
