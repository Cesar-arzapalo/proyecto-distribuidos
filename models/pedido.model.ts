import {Schema, model, Document} from 'mongoose';
import { clienteSchema, ICliente } from './cliente.model';
import { productoSchema, IProducto } from './producto.model';

const productoSolicitdado = new Schema({
    producto:{
        type: productoSchema,
        required:[true, 'El Producto es necesario en la Entidad Pedido']
    },
    cantidad:{
        type: Number,
        required:[true, 'La cantidad del porducto comprado es necesario para la entidad Pedido']
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
    cliente: {
        type: clienteSchema,
        required: [true, 'El nombre del usuario es necesario para la entidad Pedido']
    }
});

export interface IProductoSolicitado extends Document {
    producto: IProducto;
    cantidad: Number;
}

interface IPedido extends Document {
    fechaEmision: Date;
    productoSolicitados: Array<IProductoSolicitado>;
    cliente: ICliente;
};

export const Pedido = model<IPedido>('pedido', pedidoSchema);