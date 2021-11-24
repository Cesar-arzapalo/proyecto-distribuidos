"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioSchema = void 0;
var mongoose_1 = require("mongoose");
var tarjetaSchema = new mongoose_1.Schema({
    numero: {
        type: Number,
        required: [true, 'El numero de la tarjeta es necesaria para la entidad Tarjeta']
    },
    fecha_vencimiento: {
        type: Date,
        required: [true, 'La fecha de vencimiento es necesaria para la entidad Tarjeta']
    },
    ccv: {
        type: String,
        required: [true, 'El codigo de 3 digitos es necesaria para la entidad Tarjeta']
    }
});
var direccionSchema = new mongoose_1.Schema({
    direccion: {
        type: String,
        required: [true, 'La direccion es necesaria para la entidad Direccion']
    },
    distrito: {
        type: String,
        required: [true, 'El distrito es necesario para la entidad Direccion']
    },
    codigo_postal: {
        type: String,
        required: [true, 'El codigo postal es necesario para la entidad Direccion']
    }
});
exports.UsuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    correo: {
        type: String,
    },
    direccion: {
        type: [direccionSchema],
    },
    tarjetas: {
        type: [tarjetaSchema]
    }
});
;
;
;
