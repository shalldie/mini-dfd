; (function (root, factory) {
    var name = 'mini-dfd';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([name], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        // module.exports = factory(require(name));
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root[name] = factory(root[name]);
    }
}(this, function () {
    return function dfd() {
        var self = this;
        // make a object factory. 工厂方法
        if (!(self instanceof dfd)) {
            return new dfd();
        }
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
    }
}));