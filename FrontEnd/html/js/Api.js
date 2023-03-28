/**
 * @author: LK
 * @desc: Api
 */


// ------------------------------------------------
// Encoding API
// const textEncoder = new TextEncoder(); 
// const decodedText = 'foo'; 
// const encodedText = textEncoder.encode(decodedText);
// // f 的 UTF-8 编码是 0x66（即十进制 102）
// // o 的 UTF-8 编码是 0x6F（即二进制 111）
// console.log(encodedText); // Uint8Array(3) [102, 111, 111]


// ------------------------------------------------
// Notifications API
// new Notification('Title text!');

// const n = new Notification('foo');
// n.onshow = () => console.log('Notification was shown!');
// n.onclick = () => console.log('Notification was clicked!');
// n.onclose = () => console.log('Notification was closed!');
// n.onerror = () => console.log('Notification experienced an error!');

// ------------------------------------------------
// Page Visibility API
// console.log(document.visibilityState);
// document.onvisibilitychange = () => {
//     console.log("页面变化了");
// };


// ------------------------------------------------
// 原生拖放
// let droptarget = document.getElementById("droptarget"); 
// console.log(droptarget);
// droptarget.addEventListener("dragover", (event) => { 
//     console.log(111);
//  event.preventDefault(); 
// }); 
// droptarget.addEventListener("dragenter", (event) => { 
//     console.log(222);

//  event.preventDefault(); 
// });