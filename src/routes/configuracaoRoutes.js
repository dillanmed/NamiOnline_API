const express = require("express");
const router = express.Router();

const configuracaoController = require("../controllers/configuracaoController");

// ==============================
// BUSCAR CONFIGURAÇÕES
// ==============================
router.get("/", configuracaoController.buscarConfiguracoes);

// ==============================
// SALVAR TEMA
// ==============================
router.post("/tema", configuracaoController.salvarTema);

// ==============================
// SALVAR NOTIFICAÇÕES
// ==============================
router.post("/notificacoes", configuracaoController.salvarNotificacoes);

module.exports = router;