setTimeout(function () {
    console.log('setTimeout 1')
}, 0);
new Promise(
    resolve => {
    console.log('script end');
    setTimeout(function () {
        resolve()
    }, 0)
}).then(function () {
    console.log('promise resolve 1')
}).then(function () {
    console.log('promise resolve 2')
});

Promise.resolve().then(function () {
    console.log('promise resolve 3')
});
console.log('script start')