/**
 * @author: LK
 * @desc: Promise
 */

// 导入 fs 模块
// const fs = require("fs");

// let promise = new Promise((resolve, reject) => {
//     fs.readFile("../common/article.txt", (err, data) => {
//         err ? reject(err) : resolve(data);
//     });
// });
// promise
//     .then(
//         (res) => {
//             return new Promise((resolve, reject) => {
//                 fs.readFile("../common/info.txt", (err, data) => {
//                     err ? reject(err) : resolve(res + data);
//                 });
//             });
//         },
//         (err) => {
//             console.log(err);
//         }
//     ).then(
//         (res) => {
//             return new Promise((resolve, reject) => {
//                 fs.readFile("../common/about.txt", (err, data) => {
//                     err ? reject(err) : resolve(res + data);
//                 });
//             });
//         },
//         (err) => {
//             console.log(err);
//         }
//     )
//     .then(
//         (res) => {
//             console.log(888, res);
//         },
//         (err) => {
//             console.log(err);
//         }
//     );
// console.log();

let a = 10;
const promise = new Promise((resolve, reject) => {
    a > 5 ? resolve("success~") : reject("fail~");
});
promise.then(
    (res) => {
        console.log(res);
        return 'then--success--1'
    },
    (err) => {
        console.log(err);
        return 'then--fail--1'
    }
).then(
    res=>{
        console.log(res);
    },
    err=>{
        console.log(err);
    }
);
