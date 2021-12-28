   // 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
        // 请必须使用时间复杂度为 O(log n) 的算法。
        // 使用二分法解决问题
        const search = (nums, target) => {
            //方法一
            for (var i = 0; i < nums.length; i++) {
                if (nums[i] >= target) {
                    return i
                } else if (nums[nums.length - 1] < target) {
                    return nums.length
                } else if (nums[0] > target) {
                    return 0
                }
            }
            //方法二
            const numsLength = nums.length
            let left = 0
            let right = numsLength - 1
            while (left <= right) {
                let m = left + Math.ceil((right - left) / 2)
                if (nums[m] < target) {
                    left = m + 1
                } else if (nums[m] > target) {
                    right = m - 1
                } else {
                    return m
                }
            }
            return right + 1
        }
        console.log(search([1, 2, 3, 5, 6, 8, 8.9], 8))
        console.log(search([1, 2, 3, 5, 6, 8, 8.9], 8))
        // console.log(log10)
