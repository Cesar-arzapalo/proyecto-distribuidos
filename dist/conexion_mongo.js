"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.getConexion = function () {
        return 'mongodb+srv://aptir:JvE0AEJYaxMtxqaz@cluster0.fnwct.mongodb.net/PostresNaturales?retryWrites=true&w=majority';
    };
    return Singleton;
}());
exports.Singleton = Singleton;
