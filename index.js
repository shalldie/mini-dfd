; (function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.miniDfd = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function () {
        var self = this;
        // 将 resolve reject 暴露出来
        var pro = new Promise(function (resolve, reject) {
            self.resolve = resolve;
            self.reject = reject;
        });
        // 提供 then,catch 2个接口去绑定方法
        this.then = pro.then.bind(pro);
        this.catch = pro.catch.bind(pro);
        // 提供 promise 属性，暴露原始 promise 对象
        this.promise = pro;
    };
});
