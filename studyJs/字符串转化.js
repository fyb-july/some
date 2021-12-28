      const rep=(num)=>{
            const rep=/1(34|39|45|47|50|59)*/
        }
        const arr=(a)=>{
            return Array.from(new Set(a))
        }
    const geturl=(url)=>{
        let obj={}
        const result=url.split('?').pop()
        result.split('&').map(item=>{
             item.split('=')
             if(item[1]){
                
                if(item[2]){
                    obj[item[0]]=item[2]
                }else{
                    obj[item[0]]=''
                }
             }else{
                obj[item[0]]=undefined 
             }
        })
        return obj
    }
console.log(geturl('http://item.taobao.com/item.html?a=1&b=2&c=&d=xxx&e'))
var arr = [1, 2];
var arr2 = arr.concat([1]); 
console.log(arr2)
console.log(arr.splice(1, 0))
console.log(arr)
arr2.push( arr.splice(1, 0) )
console.log(arr,arr2)
console.log(Math.ceil(-3.14))
var a = {}, b = Object.prototype;