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
// function inorderTraversal(root) {
//     var arrList = [];
//     var strack = [];
//      while(root||strack.length>0){
//         while(root){
//             strack.push(root)
//             root=root.left
//         }
//         root=strack.pop()
//         arrList.push(root.val)
//         root=root.right
//     }
//     return arrList;
// }
// ;
// console.log(inorderTraversal({ val: 1, left: null, right: null })) 
// console.log(4&1)
var quickSort = function(arr) {
        // console.log(arr)
    　　if (arr.length <= 1) { return arr; }
    
    　　var pivotIndex = Math.floor(arr.length / 2);
    
    　　var pivot = arr.splice(pivotIndex, 1)[0];
    
    　　var left = [];
    
    　　var right = [];
    
    　　for (var i = 0; i < arr.length; i++){
    
    　　　　if (arr[i] < pivot) {
    
    　　　　　　left.push(arr[i]);
    
    　　　　} else {
    
    　　　　　　right.push(arr[i]);
    
    　　　　}
    
    　　}
    
    　　return quickSort(left).concat([pivot], quickSort(right));
    
    };
  console.log(quickSort([1,3,1,23,4,23]))  


  
// loader，它是一个转换器，将A文件进行编译成B文件，比如：将A.less转换为A.css，单纯的文件转换过程。
// plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，
// 它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务
