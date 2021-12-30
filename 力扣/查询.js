const found=(str1,str2)=>{
    if(str2>str1){
        return -1
    }else{
        if(str2!==''){
            for (var i=0;i<=str1.length-str2.length;i++){
             if(str1.substring(i,str2.length)===str2){
                 return i
             }
         }
        }else{
            return 0
        }  
    }
}
// 以前对象总说她换新衣服我都不夸好看，后面她渐渐都不问我了，我想了想我除了喷ui的设计真糟糕我好像还真不会夸，也没必要夸，夸了就要做。对象不舒服的时候总是希望我不要杠让着她点，但是长期的职业素养别说对象了老板来了也要杠，什么产品经理都没用就要杠，每天一句做不了。