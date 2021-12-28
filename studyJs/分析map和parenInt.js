function setThis(){
    this.i=11
    const that=this
    this.set= function(){
    }
}
function setUp(item,index){
    return item
}
const aa=new setThis
aa.set()
parseInt
["1","2","3"].map(parseInt)
["1","2","3"].map(fun,thisArg)
// fun是第一个参数，它是一个函数，接收3个参数分别是该数组的项，该项的索引，和该数组。
// thisArg是第二个参数他代表的是这个fun的this指向
// 当我们需要返回一个数组并且使用这个数组时我们可以使用map方法，如果只是需要修改数组里面的一些数据的时候我们可以使用forEach
["1","2","3"].map(function(item,index,array){
            console.log('输入thisArg时',this)
            console.log(item,index,array)
            return item
 },{aa:1})
//  后面那个进制数的取值范围在2-36之间，当没有填或者为0时默认为10进制，当它为1或者大于36时返回NaN
 console.log('二进制',parseInt('1111',2))
 console.log('十进制',parseInt('1111',10))
console.log(parseInt(1,0))
console.log(parseInt(2,1))
console.log(parseInt(3,2))
// console.log(this)