"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentarioSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ComentarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    imagen: {
        type: String,
    }
});
;
