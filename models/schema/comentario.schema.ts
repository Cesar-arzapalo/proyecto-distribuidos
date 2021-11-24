import {Schema, Document} from 'mongoose';

export let comentarioSchema  =new Schema({
    fecha: {
        type: Date,
        required: [true, "El campo fecha es necesaria para el comentario"]
    },
    descripcion: {
        type: String,
    },
    imagen: {
        type: String,
    }
});

comentarioSchema.add({
    comentarios: {
        type: [comentarioSchema]
    }
});

export interface IComentario extends Document {
    fecha: String;
    descripcion?: String;
    imagen?: String;
    comentarios: Array<IComentario>
};