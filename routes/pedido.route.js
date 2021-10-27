"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var pedido_model_1 = require("../models/pedido.model");
var pedidoRoutes = (0, express_1.Router)();
;
var getPedidoQuery = function (req) {
    var query = {};
    console.log(req.query.fechaEmision, req.query);
    if (req.query.fechaEmision != null) {
        query.fechaEmision = new Date(req.query.fechaEmision);
    }
    if (req.query.referenciasProducto != null) {
        query.referenciasProducto = Array(req.query.referenciasProducto);
    }
    if (req.query.usuario != null) {
        query.usuario = String(req.query.usuario);
    }
    return query;
};
pedidoRoutes.get('/', function (req, resp) {
    var query = getPedidoQuery(req);
    pedido_model_1.Pedido.find(query)
        .then(function (pedidoDB) { return resp.json({ ok: true, mensaje: pedidoDB }); })
        .catch(function (err) { return resp.json({ ok: false, mensaje: err }); });
});
pedidoRoutes.post('', function (req, resp) {
    var pedido = {
        fechaEmision: req.body.fechaEmision,
        referenciasProducto: req.body.referenciasProducto,
        usuario: req.body.usuario
    };
    pedido_model_1.Pedido.create(pedido)
        .then(function (pedidoDB) { return resp.json({ ok: true, mensaje: pedidoDB }); })
        .catch(function (err) { return resp.json({ ok: false, mensaje: err }); });
});
pedidoRoutes.put('', function (req, resp) {
    var query = getPedidoQuery(req);
    pedido_model_1.Pedido.findByIdAndUpdate(req.query.id, query, { new: true }, function (err, pedidoDB) {
        if (err)
            throw err;
        if (!pedidoDB) {
            resp.json({ ok: false, mensaje: "No existe una persona con ese ID" });
        }
        else {
            resp.json({ ok: true, mensaje: pedidoDB });
        }
    });
});
pedidoRoutes.delete('', function (req, resp) {
    pedido_model_1.Pedido.findByIdAndDelete(req.query.id, function (err, pedidoDB) {
        if (err)
            throw err;
        if (!pedidoDB) {
            resp.json({ ok: false, mensaje: "No existe una persona con ese ID" });
        }
        else {
            resp.json({ ok: true, mensaje: pedidoDB });
        }
    });
});
exports.default = pedidoRoutes;
