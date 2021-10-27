"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
var mongoose_1 = require("mongoose");
var proveedorSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'La nombre es necesario para la entidad Proveedor']
    },
    valoracion: {
        type: Number,
        required: [true, 'La valoracion es necesaria para la entidad Proveedor']
    },
    recomendaciones: {
        type: Number,
        required: [true, 'La cantidad de recomendaciones es necesario para la entidad Proveedor']
    }
});
;
exports.Proveedor = (0, mongoose_1.model)('proveedor', proveedorSchema);
