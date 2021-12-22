import { Router } from  "express";
import { Proveedor } from '../models/proveedor.model';
import { IUsuario } from '../models/schema/usuario.schema';

const proveedorRoutes = Router();


interface ProveedoraQuery {
    usuario?: IUsuario;
    empresa?: String;
};

let getProveedorQuery = (req: any): ProveedoraQuery => {
    let query: ProveedoraQuery = {}; 
    
    if(req.query.usuario != null){
        query.usuario = <IUsuario>(req.query.usuario);
    }

    if(req.query.empresa != null){
        query.empresa = String(req.query.empresa);
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
        usuario         : req.body.usuario,
        empresa         : req.body.empresa
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