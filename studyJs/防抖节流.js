function debounce(fn, delay) {
    var timer; // 维护一个 timer
    return function () {
        var _this = this; // 取debounce执行作用域的this
        var args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            fn.apply(_this, args); // 用apply指向调用debounce的对象，相当于_this.fn(args);
        }, delay);
    };
}
// function throttle(fn, delay) {
//     var previous = 0;
//     // 使用闭包返回一个函数并且用到闭包函数外面的变量previous
//     return function() {
//         var _this = this;
//         var args = arguments;
//         var now = new Date();
//         console.log(now)
//         if(now - previous > delay) {
//             fn.apply(_this, args);
//             previous = now;
//         }
//     }
// }
// console.log(throttle(()=>{console.log(11)},1000))
function throttle(fn,delay){
    var timer
    return ()=>{
        console.log(timer)
        clearInterval(timer)
      timer= setTimeout(()=>{
        console.log(111)
        },delay)
    }
}

