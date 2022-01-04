const rootTree = {
    val: 1,
    left: { val: 3, left: { val: 1, }, right: { val: null } },
    right: { val: 3, left: { val: null, }, right: { val: 4 } }
}
const diffTree = (root) => {
    // 迭代
    let queue = [root.left, root.right]
    while (queue.length) {
        let left = queue.shift()
        let right = queue.shift()
        // 当两个都是等于null的情况不能直接return,还需要继续比较
        if (!left && !right) {
            continue;
        }
        // 因为左右不可能都等于null,那么当有一个或者两个的值不相等的情况下返回false
        if (!left || !right || left.val !== right.val) {
            return false
        }
        queue.push(left.left)
        queue.push(right.right)
        queue.push(left.right)
        queue.push(right.left)
    }
    return true
}
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
*/

function isSymmetric(root) {
    const leftRight = (left, right) => {
        if (left === null && right === null) {
            return true
        }
        if (!left || !right) {
            return false
        }
        if (left.val === right.val) {
            return leftRight(left.left, right.right) && leftRight(left.right, right.left)
        }
        return false
    }
    return leftRight(root, root)
};
console.log(diffTree(rootTree))