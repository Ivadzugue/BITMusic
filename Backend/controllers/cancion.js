"use strict";

var Cancion = require("../models/cancion");

function crearCancion(req, res) {
  var cancion = new Cancion();
  var params = req.body;

  cancion.titulo = params.titulo;
  cancion.duracion = params.duracion;
  cancion.genero = params.genero;
  cancion.artista = params.artista;
  cancion.archivo = params.archivo;

  cancion.save((error, cancionGuardada) => {
    if (error) {
      res.status(500).send({ message: "Error al guardar la canción" });
    } else {
      if (!cancionGuardada) {
        res.status(404).send({ message: "No se ha guardado la cancion" });
      } else {
        res.status(200).send({ cancion: cancionGuardada });
      }
    }
  });
}

function borrarCancion(req, res) {
  var idCancion = req.params.id;

  Cancion.findByIdAndRemove(idCancion, (error, cancionEliminada) => {
    if (error) {
      res.status(500).send({ message: "Error al eliminar canción" });
    } else {
      if (!cancionEliminada) {
        res.status(404).send({ message: "La canción no ha sido elimianda" });
      } else {
        res.status(200).send({ cancion: borrarCancion });
      }
    }
  });
}

function obtenerTodasCanciones(req, res) {
  //var nombreCancion = req.params.nombre;
  Cancion.find((error, cancion) => {
    if (error) {
      res.status(500).send("Error en la petición");
    } else {
      if (!cancion) {
        res.status(404).send({ message: "No se encontraron canciones" });
      } else {
        res.status(200).send({ cancion });
      }
    }
  });
}

function cargarFicheroCancion(params) {}

function obtenerFicheroCancion(params) {}

module.exports = {
  crearCancion,
  borrarCancion,
  obtenerTodasCanciones,
  cargarFicheroCancion,
  obtenerFicheroCancion
};
