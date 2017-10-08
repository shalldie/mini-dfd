# mini-dfd
A ext for Promise to make it more easy to use,a deferred like.

## Install
    npm install mini-dfd

## Example

```js
const minidfd = require('mini-dfd');

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