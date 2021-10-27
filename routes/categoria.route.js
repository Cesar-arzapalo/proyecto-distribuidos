"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var categoria_model_1 = require("../models/categoria.model");
var categoriaRoutes = (0, express_1.Router)();
;
var getCategoriaQuery = function (req) {
    var query = {};
    if (req.query.nombre != null) {
        query.nombre = String(req.query.nombre);
    }
    if (req.query.raiz != null) {
        query.raiz = Boolean(req.query.raiz);
    }
    if (req.query.idCategoriasHijas != null) {
        query.idCategoriasHijas = Array(req.query.idCategoriasHijas);
    }
    return query;
};
categoriaRoutes.get('/', function (req, resp) {
    var query = getCategoriaQuery(req);
    categoria_model_1.Categoria.find(query)
        .then(function (categoriaDB) { return resp.json({ ok: true, mensaje: categoriaDB }); })
        .catch(function (err) { return resp.json({ ok: false, mensaje: err }); });
});
categoriaRoutes.post('', function (req, resp) {
    var categoria = {
        nombre: req.body.nombre,
        valoracion: req.body.valoracion,
        idCategoriasHijas: req.body.idCategoriasHijas
    };
    categoria_model_1.Categoria.create(categoria)
        .then(function (categoriaDB) { return resp.json({ ok: true, mensaje: categoriaDB }); })
        .catch(function (err) { return resp.json({ ok: false, mensaje: err }); });
});
categoriaRoutes.put('', function (req, resp) {
    var query = getCategoriaQuery(req);
    categoria_model_1.Categoria.findByIdAndUpdate(req.query.id, query, { new: true }, function (err, categoriaDB) {
        if (err)
            throw err;
        if (!categoriaDB) {
            resp.json({ ok: false, mensaje: "No existe una persona con ese ID" });
        }
        else {
            resp.json({ ok: true, mensaje: categoriaDB });
        }
    });
});
categoriaRoutes.delete('', function (req, resp) {
    categoria_model_1.Categoria.findByIdAndDelete(req.query.id, function (err, categoriaDB) {
        if (err)
            throw err;
        if (!categoriaDB) {
            resp.json({ ok: false, mensaje: "No existe una persona con ese ID" });
        }
        else {
            resp.json({ ok: true, mensaje: categoriaDB });
        }
    });
});
exports.default = categoriaRoutes;
