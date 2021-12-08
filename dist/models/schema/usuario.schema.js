"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioSchema = exports.direccionSchema = exports.tarjetaSchema = void 0;
var mongoose_1 = require("mongoose");
exports.tarjetaSchema = new mongoose_1.Schema({
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
exports.direccionSchema = new mongoose_1.Schema({
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
    nombres: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    correo: {
        type: String,
    },
    dni: {
        type: Number,
        required: [true, 'El dni del usuario es ncesario en la entidad usuario']
    },
    celulares: {
        type: [Number],
        required: [true, 'El aray de celulares ess necesario para la entidad usuario']
    },
    direcciones: {
        type: [exports.direccionSchema],
    },
    tarjetas: {
        type: [exports.tarjetaSchema]
    },
    foto: {
        type: String,
        required: [true, 'La foto del usuario es necesario para la entidad usuario']
    }
});
;
;
;
