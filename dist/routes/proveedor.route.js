"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var proveedor_model_1 = require("../models/proveedor.model");
var proveedorRoutes = (0, express_1.Router)();
;
var getProveedorQuery = function (req) {
    var query = {};
    if (req.query.usuario != null) {
        query.usuario = (req.query.usuario);
    }
    if (req.query.empresa != null) {
        query.empresa = String(req.query.empresa);
    }
    return query;
};
proveedorRoutes.get('/', function (req, resp) {
    var query = getProveedorQuery(req);
    proveedor_model_1.Proveedor.find(query)
        .then(function (proveedorDB) { return resp.json({ ok: true, mensaje: proveedorDB }); })
        .catch(function (err) { return resp.json({ ok: false, mensaje: err }); });
});
proveedorRoutes.post('', function (req, resp) {
    var proveedor = {
        usuario: req.body.usuario,
        empresa: req.body.empresa
    };
    proveedor_model_1.Proveedor.create(proveedor)
        .then(function (proveedorDB) { return resp.json({ ok: true, mensaje: proveedorDB }); })
        .catch(function (err) { return resp.json({ ok: false, mensaje: err }); });
});
proveedorRoutes.put('', function (req, resp) {
    var query = getProveedorQuery(req);
    console.log(query);
    console.log(req.query);
    proveedor_model_1.Proveedor.findByIdAndUpdate(req.query.id, query, { new: true }, function (err, proveedorDB) {
        if (err)
            throw err;
        if (!proveedorDB) {
            resp.json({ ok: false, mensaje: "No existe una persona con ese ID" });
        }
        else {
            resp.json({ ok: true, mensaje: proveedorDB });
        }
    });
});
proveedorRoutes.delete('', function (req, resp) {
    proveedor_model_1.Proveedor.findByIdAndDelete(req.query.id, function (err, proveedorDB) {
        if (err)
            throw err;
        if (!proveedorDB) {
            resp.json({ ok: false, mensaje: "No existe una persona con ese ID" });
        }
        else {
            resp.json({ ok: true, mensaje: proveedorDB });
        }
    });
});
exports.default = proveedorRoutes;
