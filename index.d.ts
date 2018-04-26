/**
 * Promise 包装对象 Deferred
 *
 * @export
 * @class Deferred
 */
export default class Deferred {
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
}
