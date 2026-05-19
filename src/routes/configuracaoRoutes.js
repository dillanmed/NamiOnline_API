const express = require("express");
const configuracaoController = require("../controllers/configuracaoController");

const router = express.Router();

router.get("/", configuracaoController.buscarConfiguracoes);
router.post("/tema", configuracaoController.salvarTema);
router.post("/notificacoes", configuracaoController.salvarNotificacoes);

module.exports = router;
