import {Schema, Document} from 'mongoose';

export const tarjetaSchema  =new Schema({
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

export const direccionSchema  =new Schema({
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
    nombres: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    correo: {
        type: String,
    },
    dni: {
        type: Number,
        required: [true, 'El dni del usuario es ncesario en la entidad usuario']
    },
    celulares:{
        type: [Number],
        required:[true, 'El aray de celulares ess necesario para la entidad usuario']
    },
    direcciones: {
        type: [direccionSchema],
    },
    tarjetas:{
        type: [tarjetaSchema]
    },
    foto:{
        type: String,
        required: [true, 'La foto del usuario es necesario para la entidad usuario']
    }
});

export interface ITarjeta extends Document {
    numero: Number;
    fecha_vencimiento: Date;
    ccv: Number;
};

export interface IDireccion extends Document {
    direccion: String;
    distrito: String;
    codigo_postal: String;
};

export interface IUsuario extends Document {
    nombres: String;
    apellidos: String;
    correo: String;
    dni:Number;
    celulares:Array<Number>
    direcciones: Array<IDireccion>;
    tarjetas: Array<ITarjeta>;
    foto: String;
};