# mini-dfd
A ext for Promise to make it more easy to use,a deferred like.

## Install
    npm install mini-dfd

## Interface
```js
/**
 * 同 Promise.prototye.then 接口
 *
 * @memberof Deferred
 */
then: (onfulfilled?: (value: any) => any, onrejected?: (reason: any) => any) => Promise<any>

/**
 * 同 Promise.prototype.catch 接口
 *
 * @memberof Deferred
 */
catch: (onrejected?: (reason: any) => any) => Promise<any>

/**
 * 将 promise 状态更改为 fulfilled
 *
 * @memberof Deferred
 */
resolve: (value?: any) => void

/**
 * 将 promise 状态更改为 rejected
 *
 * @memberof Deferred
 */
reject: (reason?: any) => void

/**
 * 获取原始 promise 对象
 *
 * @type {Promise<any>}
 * @memberof Deferred
 */
promise: Promise<any>
```

## Example

```js
// commonjs, node
// const Deferred = require('mini-dfd').default;

// es6 module, typescript
import Deferred from 'mini-dfd';

function sleep(delay) {
    let dfd = new Deferred();
    setTimeout(function () {
        dfd.resolve();
    }, delay);
    return dfd.promise;
}

(async () => {
    for (let i = 0; i < 10; i++) {
        console.log(new Date().getSeconds());
        await sleep(1000);
    }
})();

// result,may be like: 1,2,3,4,5,6,7,8,9
```
