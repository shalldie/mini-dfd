export default function minidfd(): IDeferred;

/**
 * Promise 包装对象
 * 
 * @interface IDeferred
 */
interface IDeferred {
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
}