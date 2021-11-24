"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cliente_model_1 = require("../models/cliente.model");
var clienteRoutes = (0, express_1.Router)();
;
var getClienteQuery = function (req) {
    var query = {};
    if (req.query.usuario != null) {
        query.usuario = (req.query.usuario);
    }
    return query;
};
clienteRoutes.get('/', function (req, resp) {
    var query = getClienteQuery(req);
    cliente_model_1.Cliente.find(query)
        .then(function (clienteDB) { return resp.json({ ok: true, mensaje: clienteDB }); })
        .catch(function (err) { return resp.json({ ok: false, mensaje: err }); });
});
clienteRoutes.post('', function (req, resp) {
    var cliente = {
        usuario: req.body.usuario
    };
    cliente_model_1.Cliente.create(cliente)
        .then(function (clienteDB) { return resp.json({ ok: true, mensaje: clienteDB }); })
        .catch(function (err) { return resp.json({ ok: false, mensaje: err }); });
});
clienteRoutes.put('', function (req, resp) {
    var query = getClienteQuery(req);
    console.log(query);
    console.log(req.query);
    cliente_model_1.Cliente.findByIdAndUpdate(req.query.id, query, { new: true }, function (err, clienteDB) {
        if (err)
            throw err;
        if (!clienteDB) {
            resp.json({ ok: false, mensaje: "No existe un cliente con ese ID" });
        }
        else {
            resp.json({ ok: true, mensaje: clienteDB });
        }
    });
});
clienteRoutes.delete('', function (req, resp) {
    cliente_model_1.Cliente.findByIdAndDelete(req.query.id, function (err, clienteDB) {
        if (err)
            throw err;
        if (!clienteDB) {
            resp.json({ ok: false, mensaje: "No existe un cliente con ese ID" });
        }
        else {
            resp.json({ ok: true, mensaje: clienteDB });
        }
    });
});
exports.default = clienteRoutes;
