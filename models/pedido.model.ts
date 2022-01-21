import {Schema, model, Document} from 'mongoose';
import { clienteSchema, ICliente } from './cliente.model';
import { IProducto, productoSchema } from './producto.model';
import { direccionSchema, tarjetaSchema, IUsuario, ITarjeta, IDireccion } from './schema/usuario.schema';

const compradorSchema = new Schema({
    nombres: {
        type: String,
        required: [true, 'El nombre es necesario para la entidad Comprador']
    },
    apellidos: {
        type: String,
        required: [true, 'La apellidos es necesaria para la entidad Comprador']
    },
    dni: {
        type: Number,
        required: [true, 'Las caracteristicas son necesarias para la entidad Comprador']
    },
    celular: {
        type: Number,
        required: [true, 'el celular para contactar es necesario en la entidad Comprador']
    },
    direccion:{
        type: direccionSchema,
        required: [true, 'la direccion de entrega es necesario para la entidad Comprador']
    },
    tarjeta:{
        type: tarjetaSchema,
        required:[true, 'La tarjeta de compra es necesaria para la entidad Comprador']
    },
    foto:{
        type: String,
        required: [true, 'La foto de comprador es necesario para la entidad comprador']
    }
})


const productoSolicitdado = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario para la entidad Producto']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es necesaria para la entidad Producto']
    },
    caracteristicas: {
        type: Object,
        required: [true, 'Las caracteristicas son necesarias para la entidad Producto']
    },
    imagenes:{
        type: [String],
        required: [true, 'El arreglo de imagenes de los productos es necesario para la entidad Producto']
    },
    cantidad:{
        type: Number,
        required:[true, 'La cantidad del porducto comprado es necesario para la entidad Pedido']
    },
    precioUnidad:{
        type: Number,
        required:[true, 'El precio del porducto comprado es necesario para la entidad Pedido']
    }
})

const pedidoSchema  =new Schema({
    fechaEmision: {
        type: Date,
        required: [true, 'La fecha de emision es necesario para la entidad Pedido']
    },
    productoSolicitados: {
        type: [productoSolicitdado],
        required: [true, 'El arreglo de productos solicitaados es necesario para la entidad Pedido']
    },
    comprador: {
        type: compradorSchema,
        required: [true, 'Los datos del comprador son necesario para la entidad Pedido']
    }
});

export interface IComprador extends Document {
    nombre: IUsuario['nombres'];
    apellidos: IUsuario['apellidos'];
    dni: IUsuario['dni'];
    celular: Number;
    direccion:IDireccion;
    tarjeta:ITarjeta;
    foto:IUsuario['foto'];
};

export interface IProductoSolicitado extends Document {
    nombre: IProducto['nombre'];
    descripcion: IProducto['descripcion'];
    caracteristicas: IProducto['caracteristicas'];
    imagenes: IProducto['imagenes'];
    cantidad: Number;
    precioUnidad: Number;
}

export interface IPedido extends Document {
    fechaEmision: Date;
    productoSolicitados: Array<IProductoSolicitado>;
    comprador: IComprador;
};

export const Pedido = model<IPedido>('pedido', pedidoSchema);