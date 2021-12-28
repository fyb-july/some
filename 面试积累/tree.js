function sortedArrayToBST(nums: number[]): TreeNode | null {

    // function childSortedArray(childNums:number[]): TreeNode | null {
        const mid=Math.floor(nums.length-1)
        let childRoot:TreeNode
        childRoot.val=nums[mid]
        childRoot.left=sortedArrayToBST(nums.splice(0,mid))
        nums.splice(0,1)
        childRoot.right=sortedArrayToBST(nums)
        return childRoot
    // }

};