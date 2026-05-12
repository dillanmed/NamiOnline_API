const express = require("express");
const usuarioController = require("../controllers/usuarioControllers");

const router = express.Router();

router.post("/", usuarioController.create);
router.get("/", usuarioController.index);

module.exports = router;