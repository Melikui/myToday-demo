/**
 * @author: LK
 * @desc: Array
 */

// 数组常用方法

let arr = ["a", "b", "c", "d", "e"];

console.log(arr.splice(2, 1));
let newArr = arr.splice(1, 1);
arr = [...newArr, ...arr];
console.log(arr);
arr.unshift('1')
arr.shift(2)

console.log(arr);