// 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
function second(nums){
    let num=Array.from(new Set(nums)) 
    num.sort((a,b)=>{
        return b-a
    })
    if(num.length>2){
            return num[2]
    }else{
        return num[0]
    }
}
console.log(second([1,2,-2147483648]))