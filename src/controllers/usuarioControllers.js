const usuarioService = require("../services/usuarioService");

async function create(req, res) {
  const user = await usuarioService.createUsuarios(req.body);
  return res.status(201).json(user);
}

async function index(req, res) {
  const users = await usuarioService.listUsuarios();
  return res.json(users);
}

module.exports = {
  create,
  index
};