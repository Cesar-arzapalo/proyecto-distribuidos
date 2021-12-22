"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var muro_model_1 = require("../models/muro.model");
var muroRoutes = (0, express_1.Router)();
;
var getMuroQuery = function (req) {
    var query = {};
    if (req.query.proveedor != null) {
        query.proveedor = (req.query.proveedor);
    }
    if (req.query.descripcion != null) {
        query.descripcion = String(req.query.descripcion);
    }
    if (req.query.fecha_creacion != null) {
        query.fecha_creacion = new Date(req.query.fecha_creacion);
    }
    if (req.query.valoracion != null) {
        query.valoracion = Number(req.query.valoracion);
    }
    if (req.query.recomendaciones != null) {
        query.recomendaciones = Number(req.query.recomendaciones);
    }
    if (req.query.comentarios != null) {
        query.comentarios = Array(req.query.comentarios);
    }
    return query;
};
muroRoutes.get('/', function (req, resp) {
    var query = getMuroQuery(req);
    muro_model_1.Muro.find(query)
        .then(function (muroDB) { return resp.json({ ok: true, mensaje: muroDB }); })
        .catch(function (err) { return resp.json({ ok: false, mensaje: err }); });
});
muroRoutes.post('', function (req, resp) {
    var muro = {
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
        imagenes: req.body.imagenes,
        comentarios: req.body.comentarios
    };
    muro_model_1.Muro.create(muro)
        .then(function (muroDB) { return resp.json({ ok: true, mensaje: muroDB }); })
        .catch(function (err) { return resp.json({ ok: false, mensaje: err }); });
});
muroRoutes.put('', function (req, resp) {
    var query = getMuroQuery(req);
    muro_model_1.Muro.findByIdAndUpdate(req.query.id, query, { new: true }, function (err, muroDB) {
        if (err)
            throw err;
        if (!muroDB) {
            resp.json({ ok: false, mensaje: "No existe un muro con ese ID" });
        }
        else {
            resp.json({ ok: true, mensaje: muroDB });
        }
    });
});
muroRoutes.delete('', function (req, resp) {
    muro_model_1.Muro.findByIdAndDelete(req.query.id, function (err, muroDB) {
        if (err)
            throw err;
        if (!muroDB) {
            resp.json({ ok: false, mensaje: "No existe un muro con ese ID" });
        }
        else {
            resp.json({ ok: true, mensaje: muroDB });
        }
    });
});
exports.default = muroRoutes;
