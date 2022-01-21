"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var mongoose_1 = require("mongoose");
var usuario_schema_1 = require("./schema/usuario.schema");
var compradorSchema = new mongoose_1.Schema({
    nombres: {
        type: String,
        required: [true, 'El nombre es necesario para la entidad Comprador']
    },
    apellidos: {
        type: String,
        required: [true, 'La apellidos es necesaria para la entidad Comprador']
    },
    dni: {
        type: Number,
        required: [true, 'Las caracteristicas son necesarias para la entidad Comprador']
    },
    celular: {
        type: Number,
        required: [true, 'el celular para contactar es necesario en la entidad Comprador']
    },
    direccion: {
        type: usuario_schema_1.direccionSchema,
        required: [true, 'la direccion de entrega es necesario para la entidad Comprador']
    },
    foto: {
        type: String,
        required: [true, 'La foto de comprador es necesario para la entidad comprador']
    }
});
var productoSolicitdado = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario para la entidad Producto']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es necesaria para la entidad Producto']
    },
    caracteristicas: {
        type: Object,
        required: [true, 'Las caracteristicas son necesarias para la entidad Producto']
    },
    imagenes: {
        type: [String],
        required: [true, 'El arreglo de imagenes de los productos es necesario para la entidad Producto']
    },
    cantidad: {
        type: Number,
        required: [true, 'La cantidad del porducto comprado es necesario para la entidad Pedido']
    },
    precioUnidad: {
        type: Number,
        required: [true, 'El precio del porducto comprado es necesario para la entidad Pedido']
    }
});
var pedidoSchema = new mongoose_1.Schema({
    fechaEmision: {
        type: Date,
        required: [true, 'La fecha de emision es necesario para la entidad Pedido']
    },
    productoSolicitados: {
        type: [productoSolicitdado],
        required: [true, 'El arreglo de productos solicitaados es necesario para la entidad Pedido']
    },
    comprador: {
        type: compradorSchema,
        required: [true, 'Los datos del comprador son necesario para la entidad Pedido']
    }
});
;
;
exports.Pedido = (0, mongoose_1.model)('pedido', pedidoSchema);
