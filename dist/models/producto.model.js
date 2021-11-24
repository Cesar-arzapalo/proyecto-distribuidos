"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
var mongoose_1 = require("mongoose");
var comentario_schema_1 = require("./schema/comentario.schema");
var productoSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario para la entidad Producto']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es necesaria para la entidad Producto']
    },
    caracteristicas: {
        type: [Object],
        required: [true, 'Las caracteristicas son necesarias para la entidad Producto']
    },
    unidad: {
        type: String,
        required: [true, 'La unidad es necesaria para la entidad Producto']
    },
    precioUnidad: {
        type: Number,
        required: [true, 'El precio de la unidad es necesario para la entidad Producto']
    },
    stock: {
        type: Number,
        required: [true, 'El stock es necesario para la entidad Producto']
    },
    valoracion: {
        type: Number,
        required: [true, '  La valoracion es necesaria para la entidad Producto']
    },
    visitas: {
        type: Number,
        required: [true, 'El nro de visitas es necesario para la entidad Producto']
    },
    idCategoria: {
        type: String,
        required: [true, 'El id de la categoria es necesario para la entidad Producto']
    },
    idProveedor: {
        type: String,
        required: [true, 'El id del proveedor es necesario para la entidad Producto']
    },
    imagenes: {
        type: [String],
        required: [true, 'El arreglo de imagenes de los productos es necesario para la entidad Producto']
    },
    comentarios: {
        type: [comentario_schema_1.comentarioSchema],
        required: [true, 'El arreglo de comentarios de los productos es necesario para la entidad Producto']
    }
});
;
exports.Producto = (0, mongoose_1.model)('producto', productoSchema);
