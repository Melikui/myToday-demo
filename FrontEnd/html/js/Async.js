/**
 * @author: LK
 * @desc: async 和 await
 */

// const fs = require("fs");

// 读取文件
// const readFile = (fileName) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, (error, data) => {
//             if (error) return reject(error);
//             resolve(data);
//         });
//     });
// };

// const asyncReadFile = async () => {
//     const fs1 = await readFile("./file/a.txt");
//     const fs2 = await readFile("./file/b.txt");
//     console.log(fs1.toString());
//     console.log(fs2.toString());
// };

// asyncReadFile();
// async function timeout(ms) {
//     await new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value);
// }

// asyncPrint("hello world", 50);

async function async1() {
    console.log(22);
    await async2();
    console.log(77);
    console.log(88);
}
async function async2() {
    console.log(33);
    console.log(44);
}
console.log(11);
async1();
console.log(55);
console.log(66);

function* gen1() {
     console.log(2);
    let g = gen2();
    yield g.next();
    yield g.next();
    console.log(5);
    console.log(6);
}
function* gen2() {
    console.log(3);
    console.log(4);
}
console.log(1);
let gen = gen1();
gen.next();
gen.next();
gen.next();
gen.next();
gen.next();
console.log(7);
console.log(8);

// 输出顺序：script start->async1 start->async2->script end->async1 end
