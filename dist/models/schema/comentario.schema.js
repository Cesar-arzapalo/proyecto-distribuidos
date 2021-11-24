"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comentarioSchema = void 0;
var mongoose_1 = require("mongoose");
exports.comentarioSchema = new mongoose_1.Schema({
    fecha: {
        type: Date,
        required: [true, "El campo fecha es necesaria para el comentario"]
    },
    descripcion: {
        type: String,
    },
    imagen: {
        type: String,
    }
});
exports.comentarioSchema.add({
    comentarios: {
        type: [exports.comentarioSchema]
    }
});
;
