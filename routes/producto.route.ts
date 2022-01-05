import { Router } from  "express";
import { Producto } from '../models/producto.model';
import { IComentario } from '../models/schema/comentario.schema';

const productoRoutes = Router();


interface ProductoQuery {     
    nombre?: String;
    descripcion?: String;
    caracteristicas?: Object;
    unidad?: String;
    precioUnidad?: Number;
    stock?: Number;
    valoracion?: Number;
    visitas?: Number;
    idCategoria?: String;
    idProveedor?: String;
    imagenes?: Array<String>;
};

let getProductoQuery = (req: any): ProductoQuery => {
    let query: ProductoQuery = {}; 
    
    if(req.query.nombre != null){
        query.nombre = String(req.query.nombre);
    }

    if(req.query.descripcion != null){
        query.descripcion = String(req.query.descripcion);
    }

    if(req.query.caracteristicas != null){
        query.caracteristicas = <Object>(req.query.caracteristicas);
    }

    if(req.query.unidad != null){
        query.unidad = String(req.query.unidad);
    }

    if(req.query.precioUnidad != null){
        query.precioUnidad = Number(req.query.precioUnidad);
    }

    if(req.query.stock != null){
        query.stock = Number(req.query.stock);
    }

    if(req.query.valoracion != null){
        query.valoracion = Number(req.query.valoracion);
    }

    if(req.query.visitas != null){
        query.visitas = Number(req.query.visitas);
    }

    if(req.query.idCategoria != null){
        query.idCategoria = String(req.query.idCategoria);
    }

    if(req.query.idProveedor != null){
        query.idProveedor = String(req.query.idProveedor);
    }

    if(req.query.imagenes != null){
        query.imagenes = Array<String>(req.query.imagenes);
    }
    return query;
}

productoRoutes.get('/' , (req, resp)=>{
    
    let query: ProductoQuery = getProductoQuery(req);
    
    Producto.find(query)
        .then(productoDB => resp.json({ok: true, mensaje: productoDB }) )
        .catch(err => resp.json({ok: false, mensaje: err }));

});

productoRoutes.post('' , (req, resp)=>{
    
    const producto = {
        _id             : req.body._id,     
        nombre          : req.body.nombre,
        descripcion     : req.body.descripcion,
        caracteristicas : req.body.caracteristicas,
        unidad          : req.body.unidad,
        precioUnidad    : req.body.precioUnidad,
        stock           : req.body.stock,
        valoracion      : req.body.valoracion,
        visitas         : req.body.visitas,
        idCategoria     : req.body.idCategoria,
        idProveedor     : req.body.idProveedor,
        imagenes        : req.body.imagenes
    };

    console.log(producto);

    
    Producto.create(producto)
        .then(productoDB => resp.json({ok: true, mensaje: productoDB }) )
        .catch(err => resp.json({ok: false, mensaje: err }));
    
});

productoRoutes.put('' , (req, resp)=>{
    console.log(req.query)
    let query: ProductoQuery = getProductoQuery(req);

    Producto.findByIdAndUpdate(req.query.id, query, {new: true}, (err, productoDB) => {
        
        if ( err ) throw err;
        if (!productoDB) {
            resp.json({ok: false, mensaje: "No existe un producto con ese ID" });
        } else {
            resp.json({ok: true, mensaje: productoDB });
        }
    })
    
});

productoRoutes.delete('' , (req, resp)=>{
    
    Producto.findByIdAndDelete(req.query.id, (err: any, productoDB: any) => {
        if ( err ) throw err;
        if (!productoDB) {
            resp.json({ok: false, mensaje: "No existe un producto con ese ID" });
        } else {
            resp.json({ok: true, mensaje: productoDB });
        }
    })
    
});


export default productoRoutes;