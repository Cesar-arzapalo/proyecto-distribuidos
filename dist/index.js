"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server/server");
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var categoria_route_1 = __importDefault(require("./routes/categoria.route"));
var pedido_route_1 = __importDefault(require("./routes/pedido.route"));
var producto_route_1 = __importDefault(require("./routes/producto.route"));
var proveedor_route_1 = __importDefault(require("./routes/proveedor.route"));
var cors_1 = __importDefault(require("cors"));
var PORT = +process.env.PORT || 2800;
var servidor = new server_1.Server(PORT);
//Body parser
servidor.app.use(body_parser_1.default.urlencoded({ extended: true }));
servidor.app.use(body_parser_1.default.json());
//Cors 
servidor.app.use((0, cors_1.default)());
//rutas del app
servidor.app.use('/categoria', categoria_route_1.default);
servidor.app.use('/pedido', pedido_route_1.default);
servidor.app.use('/producto', producto_route_1.default);
servidor.app.use('/proveedor', proveedor_route_1.default);
//conectar db
mongoose_1.default.connect('mongodb+srv://admin:12345@cluster0.bcg8b.mongodb.net/proyecto?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err)
        throw err;
    console.log('Base de datos en linea');
});
//levantar express
servidor.start(function () {
    console.log("Servidor de la base de datos corriendo en el puerto ".concat(servidor.port));
});
