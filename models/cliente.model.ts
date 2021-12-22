import {Schema, model, Document} from 'mongoose';
import { IUsuario, UsuarioSchema } from './schema/usuario.schema';

export const clienteSchema  =new Schema({
    usuario: {
        type: [UsuarioSchema],
        required: [true, 'El dato usuario es necesario para la entidad Cliente']
    }
});

export interface ICliente extends Document {
    usuario: IUsuario;
};

export const Cliente = model<ICliente>('cliente', clienteSchema);