function newObj() {

}
newObj.prototype = { a: 1 }
newObj.prototype = { b: 1 }
const obj = {}
obj.__proto__ = { a: '1' }

const testObj = new newObj

console.log('obj', obj)
console.log('new', testObj)
console.log('test', newObj.prototype.isPrototypeOf({ b: 1 }))
const arr = [1, 2, 3]
console.log(arr.indexOf(1))
console.log(arr.lastIndexOf(1))