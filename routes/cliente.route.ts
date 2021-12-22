import { Router } from  "express";
import { Cliente } from '../models/cliente.model';
import { IUsuario } from '../models/schema/usuario.schema';

const clienteRoutes = Router();


interface ClienteQuery {
    usuario?: IUsuario;
};

let getClienteQuery = (req: any): ClienteQuery => {
    let query: ClienteQuery = {}; 
    
    if(req.query.usuario != null){
        query.usuario = <IUsuario>(req.query.usuario);
    }

    return query;
}

clienteRoutes.get('/' , (req, resp)=>{
    
    let query: ClienteQuery = getClienteQuery(req);
    
    Cliente.find(query)
        .then(clienteDB => resp.json({ok: true, mensaje: clienteDB }) )
        .catch(err => resp.json({ok: false, mensaje: err }));

});

clienteRoutes.post('' , (req, resp)=>{
    
    const cliente = {
        usuario         : req.body.usuario
    };

    Cliente.create(cliente)
        .then(clienteDB => resp.json({ok: true, mensaje: clienteDB }) )
        .catch(err => resp.json({ok: false, mensaje: err }));

    
});

clienteRoutes.put('' , (req, resp)=>{
    let query: ClienteQuery = getClienteQuery(req);
    

    console.log(query);
    
    console.log(req.query);

    Cliente.findByIdAndUpdate(req.query.id, query, {new: true}, (err, clienteDB) => {
        if ( err ) throw err;
        if (!clienteDB) {
            resp.json({ok: false, mensaje: "No existe un cliente con ese ID" });
        } else {
            resp.json({ok: true, mensaje: clienteDB });
        }

    })
    
});

clienteRoutes.delete('' , (req, resp)=>{
    
    Cliente.findByIdAndDelete(req.query.id, (err: any, clienteDB: any) => {
        if ( err ) throw err;
        if (!clienteDB) {
            resp.json({ok: false, mensaje: "No existe un cliente con ese ID" });
        } else {
            resp.json({ok: true, mensaje: clienteDB });
        }
    })
    
});


export default clienteRoutes;