"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var mongoose_1 = require("mongoose");
var productoReferncia = new mongoose_1.Schema({
    referencia: {
        type: String,
        required: [true, 'La referencia del Producto solicitado es necesario en la Entidad Pedido']
    },
    cantidad: {
        type: Number,
        required: [true, 'La cantidad del porducto comprado es necesario para la entidad Pedido']
    }
});
var pedidoSchema = new mongoose_1.Schema({
    fechaEmision: {
        type: Date,
        required: [true, 'La fecha de emision es necesario para la entidad Pedido']
    },
    referenciasProducto: {
        type: [productoReferncia],
        required: [true, 'El Nombre es necesario para la entidad Pedido']
    },
    usuario: {
        type: String,
        required: [true, 'El nombre del usuario es necesario para la entidad Pedido']
    }
});
;
exports.Pedido = (0, mongoose_1.model)('pedido', pedidoSchema);
