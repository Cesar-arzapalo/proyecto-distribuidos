import {Schema, model, Document} from 'mongoose';

const categoriaSchema  =new Schema({
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

interface ICategoria extends Document {
    nombre: String;
    raiz: Boolean;
    idCategoriasHijas: Array<String>;
};

export const Categoria = model<ICategoria>('categoria', categoriaSchema);