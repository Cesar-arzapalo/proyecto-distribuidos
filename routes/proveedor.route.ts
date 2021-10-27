import { Router } from  "express";
import { Proveedor } from '../models/proveedor.model';

const proveedorRoutes = Router();


interface ProveedoraQuery {
    nombre?: String;
    valoracion?: Number;
    recomendaciones?: Number;
};

let getProveedorQuery = (req: any): ProveedoraQuery => {
    let query: ProveedoraQuery = {}; 
    
    if(req.query.nombre != null){
        query.nombre = String(req.query.nombre);
    }

    if(req.query.valoracion != null){
        query.valoracion = Number(req.query.valoracion);
    }

    if(req.query.recomendaciones != null){
        query.recomendaciones = Number(req.query.recomendaciones);
    }
    return query;
}

proveedorRoutes.get('/' , (req, resp)=>{
    
    let query: ProveedoraQuery = getProveedorQuery(req);
    
    Proveedor.find(query)
        .then(proveedorDB => resp.json({ok: true, mensaje: proveedorDB }) )
        .catch(err => resp.json({ok: false, mensaje: err }));

});

proveedorRoutes.post('' , (req, resp)=>{
    
    const proveedor = {
        nombre          : req.body.nombre,
        valoracion      : req.body.valoracion,
        recomendaciones : req.body.recomendaciones
    };

    Proveedor.create(proveedor)
        .then(proveedorDB => resp.json({ok: true, mensaje: proveedorDB }) )
        .catch(err => resp.json({ok: false, mensaje: err }));

    
});

proveedorRoutes.put('' , (req, resp)=>{
    let query: ProveedoraQuery = getProveedorQuery(req);
    

    console.log(query);
    
    console.log(req.query);

    Proveedor.findByIdAndUpdate(req.query.id, query, {new: true}, (err, proveedorDB) => {
        if ( err ) throw err;
        if (!proveedorDB) {
            resp.json({ok: false, mensaje: "No existe una persona con ese ID" });
        } else {
            resp.json({ok: true, mensaje: proveedorDB });
        }

    })
    
});

proveedorRoutes.delete('' , (req, resp)=>{
    
    Proveedor.findByIdAndDelete(req.query.id, (err: any, proveedorDB: any) => {
        if ( err ) throw err;
        if (!proveedorDB) {
            resp.json({ok: false, mensaje: "No existe una persona con ese ID" });
        } else {
            resp.json({ok: true, mensaje: proveedorDB });
        }
    })
    
});


export default proveedorRoutes;