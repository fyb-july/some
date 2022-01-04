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
