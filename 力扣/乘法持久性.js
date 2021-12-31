// 编写一个函数，persistence，接收一个正参数num，并返回其乘法持久性，即你必须将num中的数字乘以多少次，直到达到一个数字
let num=0
persistence=(r)=>{
    let reslut=1
    if(r<10){
        return num
    }else {
        num++
        var splitStr = r.toString().split("");
        for(var s=0;s<splitStr.length;s++){
            reslut=reslut*Number(splitStr[s])
        }
        persistence(reslut)
       return num
    }
}
console.log(persistence(999))  