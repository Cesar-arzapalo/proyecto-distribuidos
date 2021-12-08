"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comentarioSchema = void 0;
var mongoose_1 = require("mongoose");
var usuarioComentario = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, "El campo nombre es necesario para la entidad usuario comentario"]
    },
    foto: {
        type: String,
        required: [true, "El campo foto es necesaria para el usuario comentario, aunque no tenga se puede almacenear el enlace de una foto generica"]
    },
});
exports.comentarioSchema = new mongoose_1.Schema({
    descripcion: {
        type: String,
    },
    imagen: {
        type: String,
    },
    usuario: {
        type: usuarioComentario,
        required: [true, "El campo usuario es necesario para la entidad comentario"]
    },
    fecha: {
        type: Date,
        required: [true, "El campo fecha es necesaria para el comentario"]
    },
    valoracion: {
        type: Number,
        required: []
    }
});
exports.comentarioSchema.add({
    respuestas: {
        type: [exports.comentarioSchema]
    }
});
;
;
