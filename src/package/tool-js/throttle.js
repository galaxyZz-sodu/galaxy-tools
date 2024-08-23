/**
 * 
 * @param {*} fn 需要节流的函数
 * @param {*} time 节流时间
 * @param {*} latest 是否在节流时间过后再执行
 * @returns 
 */
function throttle(fn, time, latest = false) {
    let timer = null;
    return function(...arg) {
        if (timer) return;
        if (!latest) {
            fn.apply(this, arg);
        }
        timer = setTimeout(() => {
            if (latest) {
                fn.apply(this, arg);
            }
            timer = null;
        }, time)
    }
}

export default throttle;