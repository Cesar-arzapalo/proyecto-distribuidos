"use strict";
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
        return 'mongodb+srv://admin:12345@cluster0.bcg8b.mongodb.net/proyecto?retryWrites=true&w=majority';
    };
    return Singleton;
}());
