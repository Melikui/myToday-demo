/**
 * @author: LK
 * @desc: 网络请求与远程资源
 */

// function httpRequest() {
//     let url = "http://127.0.0.1:5500/FrontEnd/html/common/info.txt";
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4) {
//             try {
//                 if (
//                     (xhr.status >= 200 && xhr.status < 300) ||
//                     xhr.status == 304
//                 ) {
//                     console.log(xhr.responseText);
//                 } else {
//                     console.log("Request was unsuccessful: " + xhr.status);
//                 }
//             } catch (err) {
//                 // 假设由 ontimeout 处理
//                 console.log(err);
//             }
//         }
//     };
//     xhr.onprogress = function (e) {
//         console.log(e);
//     };
//     xhr.open("get", url, true);
//     xhr.timeout = 1000; // 设置 1 秒超时
//     xhr.ontimeout = function () {
//         console.log("Request did not return in a second.");
//     };
//     xhr.send(null);
// }
// let box = document.querySelector(".box");
// box.onclick = httpRequest;

let result = fetch(
    'http://127.0.0.1:5500/FrontEnd/html/common/info.txt', { 
        method: 'GET', 
       }
)
console.log(result);
