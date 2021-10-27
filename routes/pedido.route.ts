import { Router } from  "express";
import { Pedido, IProductoReferencia } from '../models/pedido.model';

const pedidoRoutes = Router();

interface PedidoQuery {
        fechaEmision?: Date;
        referenciasProducto?: Array<IProductoReferencia>;
        usuario?: String;
};

let getPedidoQuery = (req: any): PedidoQuery => {
    let query: PedidoQuery = {}; 

    console.log(req.query.fechaEmision,req.query);
    
    if(req.query.fechaEmision != null){
        query.fechaEmision = new Date(req.query.fechaEmision);
    }

    if(req.query.referenciasProducto != null){
        query.referenciasProducto = Array<IProductoReferencia>(req.query.referenciasProducto);
    }

    if(req.query.usuario != null){
        query.usuario = String(req.query.usuario);
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
        referenciasProducto : req.body.referenciasProducto,
        usuario             : req.body.usuario
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
            resp.json({ok: false, mensaje: "No existe una persona con ese ID" });
        } else {
            resp.json({ok: true, mensaje: pedidoDB });
        }

    })
    
});

pedidoRoutes.delete('' , (req, resp)=>{
    
    Pedido.findByIdAndDelete(req.query.id, (err: any, pedidoDB: any) => {
        if ( err ) throw err;
        if (!pedidoDB) {
            resp.json({ok: false, mensaje: "No existe una persona con ese ID" });
        } else {
            resp.json({ok: true, mensaje: pedidoDB });
        }
    })
    
});


export default pedidoRoutes;