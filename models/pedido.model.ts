import {Schema, model, Document} from 'mongoose';

const productoReferncia = new Schema({
    referencia:{
        type: String,
        required:[true, 'La referencia del Producto solicitado es necesario en la Entidad Pedido']
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
    referenciasProducto: {
        type: [productoReferncia],
        required: [true, 'El Nombre es necesario para la entidad Pedido']
    },
    usuario: {
        type: String,
        required: [true, 'El nombre del usuario es necesario para la entidad Pedido']
    }
});

export interface IProductoReferencia extends Document {
    referencia: String;
    cantidad: Number;
}

interface IPedido extends Document {
    fechaEmision: Date;
    referenciasProducto: Array<IProductoReferencia>;
    usuario: String;
};

export const Pedido = model<IPedido>('pedido', pedidoSchema);