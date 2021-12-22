"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = exports.clienteSchema = void 0;
var mongoose_1 = require("mongoose");
var usuario_schema_1 = require("./schema/usuario.schema");
exports.clienteSchema = new mongoose_1.Schema({
    usuario: {
        type: [usuario_schema_1.UsuarioSchema],
        required: [true, 'El dato usuario es necesario para la entidad Cliente']
    }
});
;
exports.Cliente = (0, mongoose_1.model)('cliente', exports.clienteSchema);
