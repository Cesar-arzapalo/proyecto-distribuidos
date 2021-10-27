import { Router } from  "express";
import { Categoria } from '../models/categoria.model';

const categoriaRoutes = Router();

interface CategoriaQuery {
        nombre?: String;
        raiz?: Boolean;
        idCategoriasHijas?: Array<String>;
};

let getCategoriaQuery = (req: any): CategoriaQuery => {
    let query: CategoriaQuery = {}; 

    if(req.query.nombre != null){
        query.nombre = String(req.query.nombre);
    }

    if(req.query.raiz != null){
        query.raiz = Boolean(req.query.raiz);
    }

    if(req.query.idCategoriasHijas != null){
        query.idCategoriasHijas = Array<String>(req.query.idCategoriasHijas);
    }
    return query;
}

categoriaRoutes.get('/' , (req, resp)=>{
    
    let query: CategoriaQuery = getCategoriaQuery(req);
    
    Categoria.find(query)
        .then(categoriaDB => resp.json({ok: true, mensaje: categoriaDB }) )
        .catch(err => resp.json({ok: false, mensaje: err }));

});

categoriaRoutes.post('' , (req, resp)=>{
    
    const categoria = {
        nombre              : req.body.nombre,
        valoracion          : req.body.valoracion,
        idCategoriasHijas   : req.body.idCategoriasHijas
    };  

    Categoria.create(categoria)
        .then(categoriaDB => resp.json({ok: true, mensaje: categoriaDB }) )
        .catch(err => resp.json({ok: false, mensaje: err }));
});


categoriaRoutes.put('' , (req, resp)=>{
    let query: CategoriaQuery = getCategoriaQuery(req);

    Categoria.findByIdAndUpdate(req.query.id, query, {new: true}, (err, categoriaDB) => {
        if ( err ) throw err;
        if (!categoriaDB) {
            resp.json({ok: false, mensaje: "No existe una persona con ese ID" });
        } else {
            resp.json({ok: true, mensaje: categoriaDB });
        }

    })
    
});

categoriaRoutes.delete('' , (req, resp)=>{
    
    Categoria.findByIdAndDelete(req.query.id, (err: any, categoriaDB: any) => {
        if ( err ) throw err;
        if (!categoriaDB) {
            resp.json({ok: false, mensaje: "No existe una persona con ese ID" });
        } else {
            resp.json({ok: true, mensaje: categoriaDB });
        }
    })
    
});


export default categoriaRoutes;