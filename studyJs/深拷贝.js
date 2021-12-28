// 浅复制
var obj={name:'fyb',type:{num:1}}
console.log('obj',obj)
var obj1={...obj}
console.log('obj1',obj1)
obj.name='zjr'
obj.type.num='2'
console.log('obj',obj)
// 实现深复制
const loneCopy=(obj)=>{
    let target={}
    for (key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            if(typeof obj[key]==='object'){
                target[key]=loneCopy(obj[key])
            }else{
                target[key]=obj[key]
            }
        }
    }
    return target
}
console.log(loneCopy({a:1,b:3,c:{a:1}}))