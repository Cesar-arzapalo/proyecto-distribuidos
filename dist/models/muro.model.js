"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Muro = void 0;
var mongoose_1 = require("mongoose");
var comentario_schema_1 = require("./schema/comentario.schema");
var proveedor_model_1 = require("./proveedor.model");
var muroSchema = new mongoose_1.Schema({
    proveedor: {
        type: proveedor_model_1.proveedorSchema,
        required: [true, 'El proveedor es necesario para la entidad Muro']
    },
    decripcion: {
        type: String,
        required: [true, 'La descripcion es necesario para la entidad Muro']
    },
    fecha_creacion: {
        type: Date,
        required: [true, 'La fecha es necesario para la entidad Muro']
    },
    valoracion: {
        type: Number,
        required: [true, 'La valoracion es necesario para la entidad Muro']
    },
    recomendaciones: {
        type: Number,
        required: [true, 'La cantidad de recomendaciones es necesario para la entidad Muro']
    },
    publicaciones: {
        type: [comentario_schema_1.comentarioSchema]
    }
});
;
exports.Muro = (0, mongoose_1.model)('muro', muroSchema);
