var add=function(a,b,c){
    return a+b+c
}
const  test=(fn)=>{
    var _arg=[]
    return function (){
        _arg=[..._arg,...arguments]
        console.log(_arg.length,fn.length)
        if(_arg.length===fn.length){
            var aa=_arg
            _arg=[]
            return fn(...aa)
        }else{
            return arguments.callee
        }
    }
}
const ss=test(add)
// 所有示例都会用Hooks完成，加入大量交互示例和图表
// Hooks是React的未来，相比老文档使用Class Component做示例，新文档全面拥抱Hooks。  https://beta.reactjs.org/learn
console.log(ss(1,3)(2))
console.log(ss(1)(2)(4))
