import {Schema, Document} from 'mongoose';
import { IUsuario } from './usuario.schema';

const usuarioComentario = new Schema ({
    nombre:{
        type:String,
        required: [true,"El campo nombre es necesario para la entidad usuario comentario"]
    },
    foto:{
        type:String,
        required: [true, "El campo foto es necesaria para el usuario comentario, aunque no tenga se puede almacenear el enlace de una foto generica"]
    },
})

export let comentarioSchema  =new Schema({
    descripcion: {
        type: String,
    },
    imagen: {
        type: String,
    },
    usuario:{
        type: usuarioComentario,
        required: [true, "El campo usuario es necesario para la entidad comentario"]
    },
    fecha: {
        type: Date,
        required: [true, "El campo fecha es necesaria para el comentario"]
    },
    valoracion: {
        type: Number,
        required: []
    }
    
});

comentarioSchema.add({
    respuestas: {
        type: [comentarioSchema]
    }
});

interface IUsuarioComentario extends Document{
    nombres: IUsuario['nombres'];
    foto: IUsuario['foto'];
};

export interface IComentario extends Document {
    descripcion?: String;
    imagen?: String;
    usuario: IUsuarioComentario;
    fecha: Date;
    valoracion: Number;
    respuestas: Array<IComentario>;
};