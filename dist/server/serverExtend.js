"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerExttend = void 0;
var ServerExttend = /** @class */ (function () {
    function ServerExttend(server) {
        this.server = server;
    }
    ServerExttend.prototype.start = function (callback) {
        return this.server.start(callback);
    };
    ServerExttend.prototype.setRouter = function (stringRoute, route) {
        this.server.app.use(stringRoute, route);
    };
    ServerExttend.prototype.setConfig = function (route) {
        this.server.app.use(route);
    };
    return ServerExttend;
}());
exports.ServerExttend = ServerExttend;
