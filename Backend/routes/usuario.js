"use strict";

var express = require("express");

var UsuarioController = require("../controllers/usuario");

var api = express.Router();

api.post("/usuario", UsuarioController.crearUsuario);
api.get("/usuario/:id", UsuarioController.obtenerUsuario);
api.put("/usuario/:id", UsuarioController.actualizarUsuario);
api.get("/usuario/:id", UsuarioController.eliminarUsuario);

module.exports = api;
