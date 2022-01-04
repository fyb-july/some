var de=(nums)=>{
    for (var i=0;i<nums.length;i++){
        let count=1
        for (var j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                if(count==2){
                    nums.splice(j,1)
                    j--
                }else{
                    count++
                }
            }else{
                console.log('test',nums[i])
                count=1
            }
        }
    }
    return nums.length
}
console.log(de([1,1,1,3,4,4,4,4]))
