/**
 * @author: LK
 * @desc: Date
 */

let date = new Date();
let Y = date.getFullYear() + "-";
let M = date.getMonth() + 1;
M = (M < 10 ? "0" + M : M) + "-";
let D = date.getDate();
D = D < 10 ? "0" + D : D;
let h = date.getHours();
h = (h < 10 ? "0" + h : h) + ":";
let m = date.getMinutes();
m = (m < 10 ? "0" + m : m) + ":";
let s = date.getSeconds();
s = s < 10 ? "0" + s : s;
let time = Y + M + D + " " + h + m + s;

console.log(time);

// try {
//     log(time);
// } catch (err) {
//     console.log(err);
// }
// setInterval(()=>{
//     log(time)
// }, 1000);
