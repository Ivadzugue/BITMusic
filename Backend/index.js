"use strict";

var mongoose = require("mongoose");
var app = require("./app");
var port = 3977;

mongoose.connect("mongodb://localhost:27017/bitMusic", (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log("Conexión a base de datos exitosa");
    app.listen(port, function() {
      console.log("API esuchando en el puerto " + port);
    });
  }
});
