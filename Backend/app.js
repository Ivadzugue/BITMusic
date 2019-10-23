"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var usuario_routes = require("./routes/usuario");
var cancion_routes = require("./routes/cancion");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", usuario_routes);

app.use("/api", cancion_routes);

module.exports = app;
