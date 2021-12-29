"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server/server");
var serverExtend_1 = require("./server/serverExtend");
var conexion_mongo_1 = require("./conexion_mongo");
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var categoria_route_1 = __importDefault(require("./routes/categoria.route"));
var pedido_route_1 = __importDefault(require("./routes/pedido.route"));
var producto_route_1 = __importDefault(require("./routes/producto.route"));
var proveedor_route_1 = __importDefault(require("./routes/proveedor.route"));
var cors_1 = __importDefault(require("cors"));
var PORT = +process.env.PORT || 2800;
var servidor = new server_1.Server(PORT);
// Decorador
var serverExt = new serverExtend_1.ServerExttend(servidor);
//Body parser
serverExt.setConfig(body_parser_1.default.urlencoded({ extended: true }));
serverExt.setConfig(body_parser_1.default.json());
var conexion = conexion_mongo_1.Singleton.getInstance();
//Cors 
serverExt.setConfig((0, cors_1.default)());
//rutas del app
serverExt.setRouter('/categoria', categoria_route_1.default);
serverExt.setRouter('/pedido', pedido_route_1.default);
serverExt.setRouter('/producto', producto_route_1.default);
serverExt.setRouter('/proveedor', proveedor_route_1.default);
//conectar db
mongoose_1.default.connect(conexion.getConexion(), { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err)
        throw err;
    console.log('Base de datos en linea');
});
//levantar express
serverExt.start(function () {
    console.log("Servidor de la base de datos corriendo en el puerto ".concat(servidor.port));
});
