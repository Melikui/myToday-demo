/**
 * @author: LK
 * @desc: 数据类型
 */

// let map = new Map([
//     ["name", "Meria"],
//     ["age", "25"],
//     ["sex", "girl"],
// ]);
// console.log("size: ", map.size);
// console.log("has", map.has("name"));
// map.set("like", "food");
// map.delete("like");
// console.log("---keys---");
// for (let key of map.keys()) {
//     console.log(key);
// }
// console.log("---values---");
// for (let values of map.values()) {
//     console.log(values);
// }
// console.log("---entries---");
// for (let item of map.entries()) {
//     console.log(item[0], item[1]);
// }
// for (let [key, value] of map.entries()) {
//     console.log(key, value);
// }
// for (let [key, value] of map) {
//     console.log(key, value);
// }
// console.log("---forEach---");
// map.forEach(function (value, key, map) {
//     console.log("Key:", key, ", Value:", value);
// });

let set = new Set(["a", "a", "b", "b", "c"]);
console.log(set.has("a"));
set.add("d").add("e");
console.log(set);
set.delete("c");
console.log(set);
console.log("---values---");
for (let val of set.values()) {
    console.log(val);
}
console.log("---keys---");
for (let val of set.keys()) {
    console.log(val);
}
console.log("---forEach---");
set.forEach((i, index, arr) => {
    console.log(i, index, arr);
});
