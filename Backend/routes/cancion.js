"use strict";

var express = require("express");
var CancionController = require("../controllers/cancion");

var api = express.Router();

api.post("/cancion", CancionController.crearCancion);
api.get("/cancion/:id", CancionController.borrarCancion);
api.get("/canciones", CancionController.obtenerTodasCanciones);

module.exports = api;
