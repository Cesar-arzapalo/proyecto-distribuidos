import { Router } from  "express";
import { Muro } from '../models/muro.model';
import { IComentario } from '../models/schema/comentario.schema';
import { IProveedor } from '../models/proveedor.model';

const muroRoutes = Router();


interface MuroQuery {     
    proveedor?: IProveedor;
    descripcion?: String;
    fecha_creacion?: Date;
    valoracion?: Number;
    recomendaciones?: Number;
    comentarios?: Array<IComentario>;
};

let getMuroQuery = (req: any): MuroQuery => {
    let query: MuroQuery = {}; 
    
    if(req.query.proveedor != null){
        query.proveedor = <IProveedor>(req.query.proveedor);
    }

    if(req.query.descripcion != null){
        query.descripcion = String(req.query.descripcion);
    }

    if(req.query.fecha_creacion != null){
        query.fecha_creacion = new Date(req.query.fecha_creacion);
    }

    if(req.query.valoracion != null){
        query.valoracion = Number(req.query.valoracion);
    }

    if(req.query.recomendaciones != null){
        query.recomendaciones = Number(req.query.recomendaciones);
    }

    if(req.query.comentarios != null){
        query.comentarios = Array<IComentario>(req.query.comentarios);
    }

    return query;
}

muroRoutes.get('/' , (req, resp)=>{
    
    let query: MuroQuery = getMuroQuery(req);
    
    Muro.find(query)
        .then(muroDB => resp.json({ok: true, mensaje: muroDB }) )
        .catch(err => resp.json({ok: false, mensaje: err }));

});

muroRoutes.post('' , (req, resp)=>{
    
    const muro = {     
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
        imagenes        : req.body.imagenes,
        comentarios     : req.body.comentarios
    };


    Muro.create(muro)
        .then(muroDB => resp.json({ok: true, mensaje: muroDB }) )
        .catch(err => resp.json({ok: false, mensaje: err }));

    
});

muroRoutes.put('' , (req, resp)=>{
    let query: MuroQuery = getMuroQuery(req);

    Muro.findByIdAndUpdate(req.query.id, query, {new: true}, (err, muroDB) => {
        if ( err ) throw err;
        if (!muroDB) {
            resp.json({ok: false, mensaje: "No existe un muro con ese ID" });
        } else {
            resp.json({ok: true, mensaje: muroDB });
        }
    })
    
});

muroRoutes.delete('' , (req, resp)=>{
    
    Muro.findByIdAndDelete(req.query.id, (err: any, muroDB: any) => {
        if ( err ) throw err;
        if (!muroDB) {
            resp.json({ok: false, mensaje: "No existe un muro con ese ID" });
        } else {
            resp.json({ok: true, mensaje: muroDB });
        }
    })
    
});


export default muroRoutes;