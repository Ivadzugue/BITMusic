"use strict";

var Usuario = require("../models/usuario");

function crearUsuario(req, res) {
  usuario.nombre = params.nombre;
  usuario.edad = params.edad;
  usuario.correo = params.correo;
  usuario.password = params.password;
  usuario.imagen = params.imagen;
  usuario.role = params.role;

  usuario.save((error, usuarioGuardado) => {
    if (error) {
      res.status(500).send({ message: "Error al guardar el usuario" });
    } else {
      if (!usuarioGuardado) {
        res.status(404).send({ message: "No se ha guaradado el usuario" });
      } else {
        res.status(200).send({ usurio: usuarioGuardado });
      }
    }
  });
}

function obtenerUsuario(req, res) {
  var idUsuario = req.params.id;

  Usuario.findById(idUsuario, (error, usuario) => {
    if (error) {
      res.status(500).send({ message: "Error en la petición" });
    } else {
      if (!usuario) {
        res.status(404).send({ message: "El usuario no existe" });
      } else {
        res.status(200).send({ usuario });
      }
    }
  });
}

function actualizarUsuario(req, res) {
  var idUsuario = req.params.id;
  var nuevosDatos = req.body;

  Usuario.findByIdAndUpdate(
    idUsuario,
    nuevosDatos,
    (error, usuarioActualizado) => {
      if (error) {
        res.status(500).send({ message: "Error al actualizar el usuario" });
      } else {
        if (!usuarioActualizado) {
          res
            .status(400)
            .send({ message: "El usuario no ha sido actualizado" });
        } else {
          res.status(200).send({ usuario: usuarioActualizado });
        }
      }
    }
  );
}

function eliminarUsuario(req, res) {
  var idUsuario = req.params.id;

  Usuario.findByIdAndRemove(idUsuario, (error, usuarioEliminado) => {
    if (error) {
      res.status(500).send({ message: "Error al eliminar usuario" });
    } else {
      if (!usuarioEliminado) {
        res.status(404).send({ message: "El usuario no ha sido elimiando" });
      } else {
        res.status(200).send({ usuario: usuarioEliminado });
      }
    }
  });
}

function cargarImagenUsuario(params) {}

function obtenerImagenUsuario(params) {}

module.exports = {
  crearUsuario,
  obtenerUsuario,
  actualizarUsuario,
  eliminarUsuario,
  cargarImagenUsuario,
  obtenerImagenUsuario
};
