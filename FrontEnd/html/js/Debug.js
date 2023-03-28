/**
 * @author: LK
 * @desc: Debug-调试
 */

// throw new Error('my error---');
// console.info('my info');
// console.error('my error');
// console.warn('my warn');

function log(val) {
    let ele = document.getElementById("debuginfo");
    if (!ele) {
        ele = document.createElement("div");
        ele.id = "debuginfo";
        ele.style.background = "rgba(37, 66, 252,0.1)";
        ele.style.color = "rgba(37, 66, 252,1)";
        ele.style.padding = "5px 10px";
        ele.style.margin = "4px";
        ele.style.borderRadius = "4px";
        ele.style.textAlign = "center";
        ele.style.minWidth = "100px";
        ele.style.position = "absolute";
        ele.style.right = "0px";
        ele.style.top = "0px";
        document.body.appendChild(ele);
    }
    ele.innerHTML += `<p>${val}</p>`;
}
log("myToday");
