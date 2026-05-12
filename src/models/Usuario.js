const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  cpf: String,
  password: String,
  data_nasc: Date,
  sexo: String,
  telefone: String,
  email: String
}, { timestamps: true });

module.exports = mongoose.model("Usuario", UserSchema);