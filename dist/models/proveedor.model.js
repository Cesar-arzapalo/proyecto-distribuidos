"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = exports.proveedorSchema = void 0;
var mongoose_1 = require("mongoose");
var usuario_schema_1 = require("./schema/usuario.schema");
exports.proveedorSchema = new mongoose_1.Schema({
    usuario: {
        type: [usuario_schema_1.UsuarioSchema],
        required: [true, 'La nombre es necesario para la entidad Proveedor']
    },
    empresa: {
        type: String,
        required: [true, 'La empresa asociada es necesaria para la entidad Proveedor']
    }
});
;
exports.Proveedor = (0, mongoose_1.model)('proveedor', exports.proveedorSchema);
