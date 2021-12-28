// 爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 根糖果棒的大小，B[j] 是鲍勃拥有的第 j 根糖果棒的大小。

// 因为他们是朋友，所以他们想交换一根糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）

// 返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。

// 如果有多个答案，你可以返回其中任何一个。保证答案存在。
 const arr=[11,2,3,2,3,4]

 var fairCandySwap = function(aliceSizes, bobSizes) {
    const num1=aliceSizes.reduce((a,b)=>a+b)
    let arr=[]
 averageColdy=(num1+bobSizes.reduce((a,b)=>a+b))/2
for (var i=0;i<aliceSizes.length;i++){
    const num2=aliceSizes[i]-(num1-averageColdy)
   if(bobSizes.indexOf(num2)!==-1){
       arr.push(aliceSizes[i])
       arr.push(num2)
    return arr
   }
}
};
console.log(fairCandySwap([1,2,5],[2,4]))
// 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

// 如果不能形成任何面积不为零的三角形，返回 0。
/**
 * @param {number[]} nums
 * @return {number}
 */

 var largestPerimeter = function(nums) {
     nums.sort((a,b)=>{
         return a-b
     })
    if(nums.length>=3){
        for(var i=nums.length-1;i>=2;i--){
            if(nums[i-2]+nums[i-1]>nums[i]){
                return nums[i-2]+nums[i-1]+nums[i]
            }
        }
        return 0
    }else {
        return 0
    }
};
console.log(largestPerimeter([2,2,2,1])) 

