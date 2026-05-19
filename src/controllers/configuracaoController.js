const Configuracao = require("../models/Configuracao");

// ==========================
// BUSCAR CONFIGURAÇÕES
// ==========================
exports.buscarConfiguracoes = async (req, res) => {
  try {
    let config = await Configuracao.findOne();

    if (!config) {
      config = await Configuracao.create({});
    }

    return res.json(config);
  } catch (error) {
    return res.status(500).json({
      mensagem: "Erro ao buscar configurações",
      erro: error.message,
    });
  }
};

// ==========================
// SALVAR TEMA
// ==========================
exports.salvarTema = async (req, res) => {
  try {
    const { tema } = req.body;

    const config = await Configuracao.findOneAndUpdate(
      {},
      { tema },
      { new: true, upsert: true }
    );

    return res.json({
      sucesso: true,
      mensagem: "Tema salvo com sucesso",
      configuracoes: config,
    });
  } catch (error) {
    return res.status(500).json({
      mensagem: "Erro ao salvar tema",
      erro: error.message,
    });
  }
};

// ==========================
// SALVAR NOTIFICAÇÕES
// ==========================
exports.salvarNotificacoes = async (req, res) => {
  try {
    const { notificacoes } = req.body;

    const config = await Configuracao.findOneAndUpdate(
      {},
      { notificacoes },
      { new: true, upsert: true }
    );

    return res.json({
      sucesso: true,
      mensagem: "Notificações atualizadas com sucesso",
      configuracoes: config,
    });
  } catch (error) {
    return res.status(500).json({
      mensagem: "Erro ao atualizar notificações",
      erro: error.message,
    });
  }
};