const TestingString=(str)=>{
   if(str.length>2){
    const  strArr=str.split(',')
    for(var i=0;i<strArr.length;i++){
        if(strArr[i]==3&&strArr[i+1]==3){
            i+=1
        } else if(strArr[i]==3&&strArr[i+1]!=3){
            return false
        }
    }
    return true
   }else{
       return false
   }
}

console.log(TestingString('1,2,3,3,5,6'))
console.log(TestingString('1,3,3,3,5,6'))
console.log(TestingString('1,2,3,3,3,3,5,6'))
console.log(TestingString('1,2,3,5,6'))
console.log(TestingString('1,2,3,3,3,3,5,3,3,3,6'))