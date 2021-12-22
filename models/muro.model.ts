import {Schema, model, Document} from 'mongoose';
import { comentarioSchema, IComentario } from './schema/comentario.schema';
import { proveedorSchema, IProveedor } from './proveedor.model';

const muroSchema = new Schema({
    proveedor:{
        type: proveedorSchema,
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
        type: [comentarioSchema]
    }
});


export interface IMuro extends Document {
    proveedor: IProveedor;
    descripcion: String;
    fecha_creacion: Date;
    valoracion: Number;
    recomendaciones: Number;
    comentarios: Array<IComentario>;
};

export const Muro = model<IMuro>('muro', muroSchema);