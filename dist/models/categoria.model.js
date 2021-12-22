"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
var mongoose_1 = require("mongoose");
var categoriaSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'La nombre es necesario para la entidad Categoria']
    },
    raiz: {
        type: Boolean,
        required: [true, 'La raiz es necesaria para la entidad Categoira']
    },
    idCategoriasHijas: {
        type: [String],
        required: [true, 'El id de las categorias hijas es necesario para la entidad Categoria']
    }
});
;
exports.Categoria = (0, mongoose_1.model)('categoria', categoriaSchema);
