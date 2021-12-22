import {Schema, model, Document} from 'mongoose';
import { UsuarioSchema, IUsuario } from './schema/usuario.schema';

export const proveedorSchema = new Schema({
    usuario: {
        type: [UsuarioSchema],
        required: [true, 'La nombre es necesario para la entidad Proveedor']
    },
    empresa: {
        type: String,
        required: [true, 'La empresa asociada es necesaria para la entidad Proveedor']
    }
});

export interface IProveedor extends Document {
    usuario: IUsuario;
    empresa: String;
};

export const Proveedor = model<IProveedor>('proveedor', proveedorSchema);