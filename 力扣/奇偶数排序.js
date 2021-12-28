function sortArrayByParityII(nums){
    for (var i=0;i<nums.length;i++){
        if(nums[i]%2===0){
            if(i%2!==0){
                nums.push(nums[i])
                nums.splice(i,1)
            }
        }
        else{
            if(i%2===0){
                nums.push(nums[i])
                nums.splice(i,1)
            } 
        }
    }
return nums
};
console.log(sortArrayByParityII([3,4,6,5,56,5,7,8]))