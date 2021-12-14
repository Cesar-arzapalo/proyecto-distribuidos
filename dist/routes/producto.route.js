"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var producto_model_1 = require("../models/producto.model");
var productoRoutes = (0, express_1.Router)();
;
var getProductoQuery = function (req) {
    var query = {};
    if (req.query.nombre != null) {
        query.nombre = String(req.query.nombre);
    }
    if (req.query.descripcion != null) {
        query.descripcion = String(req.query.descripcion);
    }
    if (req.query.caracteristicas != null) {
        query.caracteristicas = (req.query.caracteristicas);
    }
    if (req.query.unidad != null) {
        query.unidad = String(req.query.unidad);
    }
    if (req.query.precioUnidad != null) {
        query.precioUnidad = Number(req.query.precioUnidad);
    }
    if (req.query.stock != null) {
        query.stock = Number(req.query.stock);
    }
    if (req.query.valoracion != null) {
        query.valoracion = Number(req.query.valoracion);
    }
    if (req.query.visitas != null) {
        query.visitas = Number(req.query.visitas);
    }
    if (req.query.idCategoria != null) {
        query.idCategoria = String(req.query.idCategoria);
    }
    if (req.query.idProveedor != null) {
        query.idProveedor = String(req.query.idProveedor);
    }
    if (req.query.imagenes != null) {
        query.imagenes = Array(req.query.imagenes);
    }
    return query;
};
productoRoutes.get('/', function (req, resp) {
    var query = getProductoQuery(req);
    producto_model_1.Producto.find(query)
        .then(function (productoDB) { return resp.json({ ok: true, mensaje: productoDB }); })
        .catch(function (err) { return resp.json({ ok: false, mensaje: err }); });
});
productoRoutes.post('', function (req, resp) {
    var producto = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        caracteristicas: req.body.caracteristicas,
        unidad: req.body.unidad,
        precioUnidad: req.body.precioUnidad,
        stock: req.body.stock,
        valoracion: req.body.valoracion,
        visitas: req.body.visitas,
        idCategoria: req.body.idCategoria,
        idProveedor: req.body.idProveedor,
        imagenes: req.body.imagenes
    };
    producto_model_1.Producto.create(producto)
        .then(function (productoDB) { return resp.json({ ok: true, mensaje: productoDB }); })
        .catch(function (err) { return resp.json({ ok: false, mensaje: err }); });
});
productoRoutes.put('', function (req, resp) {
    console.log(req.query);
    var query = getProductoQuery(req);
    producto_model_1.Producto.findByIdAndUpdate(req.query.id, query, { new: true }, function (err, productoDB) {
        if (err)
            throw err;
        if (!productoDB) {
            resp.json({ ok: false, mensaje: "No existe un producto con ese ID" });
        }
        else {
            resp.json({ ok: true, mensaje: productoDB });
        }
    });
});
productoRoutes.delete('', function (req, resp) {
    producto_model_1.Producto.findByIdAndDelete(req.query.id, function (err, productoDB) {
        if (err)
            throw err;
        if (!productoDB) {
            resp.json({ ok: false, mensaje: "No existe un producto con ese ID" });
        }
        else {
            resp.json({ ok: true, mensaje: productoDB });
        }
    });
});
exports.default = productoRoutes;
