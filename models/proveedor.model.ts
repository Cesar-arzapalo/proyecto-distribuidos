import {Schema, model, Document} from 'mongoose';

const proveedorSchema = new Schema({
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

interface IProveedor extends Document {
    nombre: String;
    valoracion: Number;
    recomendaciones:Number;
};

export const Proveedor = model<IProveedor>('proveedor', proveedorSchema);