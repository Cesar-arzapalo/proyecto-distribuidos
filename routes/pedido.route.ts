import { Router } from  "express";
import { Pedido, IProductoSolicitado } from '../models/pedido.model';
import { ICliente } from '../models/cliente.model';

const pedidoRoutes = Router();

interface PedidoQuery {
        fechaEmision?: Date;
        productoSolicitados?: Array<IProductoSolicitado>;
        cliente?: ICliente;
};

let getPedidoQuery = (req: any): PedidoQuery => {
    let query: PedidoQuery = {}; 

    console.log(req.query.fechaEmision,req.query);
    
    if(req.query.fechaEmision != null){
        query.fechaEmision = new Date(req.query.fechaEmision);
    }

    if(req.query.productoSolicitados != null){
        query.productoSolicitados = Array<IProductoSolicitado>(req.query.productoSolicitados);
    }

    if(req.query.cliente != null){
        query.cliente = <ICliente>(req.query.cliente);
    }
    return query;
}

pedidoRoutes.get('/' , (req, resp)=>{
    
    let query: PedidoQuery = getPedidoQuery(req);
    
    Pedido.find(query)
        .then(pedidoDB => resp.json({ok: true, mensaje: pedidoDB }) )
        .catch(err => resp.json({ok: false, mensaje: err }));

});



pedidoRoutes.post('' , (req, resp)=>{
    
    const pedido = {
        fechaEmision        : req.body.fechaEmision,
        productoSolicitados : req.body.productoSolicitados,
        cliente             : req.body.cliente
    };

    Pedido.create(pedido)
        .then(pedidoDB => resp.json({ok: true, mensaje: pedidoDB }) )
        .catch(err => resp.json({ok: false, mensaje: err }));

    
});

pedidoRoutes.put('' , (req, resp)=>{
    let query: PedidoQuery = getPedidoQuery(req);

    Pedido.findByIdAndUpdate(req.query.id, query, {new: true}, (err, pedidoDB) => {
        if ( err ) throw err;
        if (!pedidoDB) {
            resp.json({ok: false, mensaje: "No existe un pedido con ese ID" });
        } else {
            resp.json({ok: true, mensaje: pedidoDB });
        }

    })
    
});

pedidoRoutes.delete('' , (req, resp)=>{
    
    Pedido.findByIdAndDelete(req.query.id, (err: any, pedidoDB: any) => {
        if ( err ) throw err;
        if (!pedidoDB) {
            resp.json({ok: false, mensaje: "No existe un pedido con ese ID" });
        } else {
            resp.json({ok: true, mensaje: pedidoDB });
        }
    })
    
});


export default pedidoRoutes;