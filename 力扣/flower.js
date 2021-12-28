function canPlaceFlowers(flowerbed, n){
    const result=[]
    for ( var i=1;i<flowerbed.length-1;i++){
        if(flowerbed[i-1]+flowerbed[i]+flowerbed[i+1]===0){
            result.push(flowerbed[i])
        }
    }
    console.log(result.length,n)
    return result.length>=n
};
console.log(canPlaceFlowers([0,1,0,0,0,0,1],2))
function lemonChange(arr){
    if(arr[0]===5){
        for (var i=0;i<arr.length;i++){
            if(arr[i]===10){
                if(arr.indexOf(5)!==-1&&arr.indexOf(5)<i){
                    arr.splice(arr.indexOf(5),1)
                    i--
                }else{
                    return false
                }
                
            }else if(arr[i]===20){
                if(arr.indexOf(5)!==-1&&arr.indexOf(5)<i&&arr.indexOf(10)!==-1&&arr.indexOf(10)<i){
                    arr.splice(arr.indexOf(5),1)
                    arr.splice(arr.indexOf(10),1)
                    i-=2
                }else if(arr.indexOf(5)!==-1&&arr.indexOf(5)<i){
                    arr.splice(arr.indexOf(5),1)
                    i--
                    if(arr.indexOf(5)!==-1&&arr.indexOf(5)<i){
                        arr.splice(arr.indexOf(5),1)
                        i--
                        if(arr.indexOf(5)!==-1&&arr.indexOf(5)<i){
                            arr.splice(arr.indexOf(5),1)
                            i--
                        }else{
                            return false
                        }
                    }else{
                        return false
                    }

                }
                else{
                    return false
                }

            }
        }
        return true
    }else{
        return false
    }
}
console.log(lemonChange([5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5]))