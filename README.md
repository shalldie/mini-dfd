# mini-dfd
A ext for Promise to make it more easy to use,a deferred like.

## Install
    npm install mini-dfd

## Interface
```js
/**
 * 同 Promise.prototye.then 接口
 * 
 * @memberof IDeferred
 */
then: (onfulfilled?: (value: any) => any, onrejected?: (reason: any) => any) => Promise<any>,

/**
 * 同 Promise.prototype.catch 接口
 * 
 * @memberof IDeferred
 */
catch: (onrejected?: (reason: any) => any) => Promise<any>,

/**
 * 将 promise 状态更改为 fulfilled
 * 
 * @memberof IDeferred
 */
resolve: (value?: any) => void,

/**
 * 将 promise 状态更改为 rejected
 * 
 * @memberof IDeferred
 */
reject: (reason?: any) => void,

/**
 * 获取原始 promise 对象
 * 
 * @type {Promise<any>}
 * @memberof IDeferred
 */
promise: Promise<any>
```

## Example

```js
// commonjs, node
// const minidfd = require('mini-dfd').default;

// es6 module, typescript
import minidfd from 'mini-dfd';

function sleep(delay) {
    let dfd = minidfd();
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