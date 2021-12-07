import {Schema, Document} from 'mongoose';

const tarjetaSchema  =new Schema({
    numero: {
        type: Number,
        required: [true, 'El numero de la tarjeta es necesaria para la entidad Tarjeta']
    },
    fecha_vencimiento: {
        type: Date,
        required: [true, 'La fecha de vencimiento es necesaria para la entidad Tarjeta']
    },
    ccv: {
        type: String,
        required: [true, 'El codigo de 3 digitos es necesaria para la entidad Tarjeta']
    }
});

const direccionSchema  =new Schema({
    direccion: {
        type: String,
        required: [true, 'La direccion es necesaria para la entidad Direccion']
    },
    distrito: {
        type: String,
        required: [true, 'El distrito es necesario para la entidad Direccion']
    },
    codigo_postal: {
        type: String,
        required: [true, 'El codigo postal es necesario para la entidad Direccion']
    }
});

export const UsuarioSchema  =new Schema({
    nombre: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    correo: {
        type: String,
    },
    direcciones: {
        type: [direccionSchema],
    },
    tarjetas:{
        type: [tarjetaSchema]
    }
});

export interface ITarjeta extends Document {
    numero: Number;
    fecha_vencimimento: Date;
    ccv: Number;
};

export interface IDireaccion extends Document {
    direccion: String;
    distrito: String;
    codigo_postal: String;
};

export interface IUsuario extends Document {
    nombre: String;
    apellidos: String;
    correo: String;
    direcciones: Array<IDireaccion>;
    tarjetas: Array<ITarjeta>;
};