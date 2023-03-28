/**
 * @author: LK
 * @desc: Proxy
 */

const target = {
    name: "jack",
    age: 23,
};
const handler = {
    get(target, propKey) {
        return 35;
    },
    set(target, propKey) {
        return 35;
    },
};
const proxy = new Proxy(target, handler);


console.log(target);
console.log(proxy);
