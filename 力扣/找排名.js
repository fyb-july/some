function findRelativeRanks(score) {
    let arr = [...score]
    let arr1 = new Array(score.length).fill('0')
    score.sort((a, b) => {
        return b - a
    })
    for (var i = 0; i < arr.length; i++) {
        if (i === 0) {
            arr1[score.indexOf(arr[i])] = 'Gold Medal'
        } else if (i === 1) {
            arr1[score.indexOf(arr[i])] = 'Silver Medal'
        } else if (i === 2) {
            arr1[score.indexOf(arr[i])] = 'Bronze Medal'
        } else {
            arr1[score.indexOf(arr[i])] = (i + 1).toString()
        }
    }
    return arr1
};
console.log(findRelativeRanks([6, 4, 7, 8, 9]))
var arr = [1, 2]
arr2 = arr.reverse()
arr2.push([1, 2])
var x = 1
var a = []
a[5] = 0
console.log(Object.keys({ a: 1, b: 2 }))
var arr = [1, 2]
arr.map((item) => {
    return item
})
console.log(arr)