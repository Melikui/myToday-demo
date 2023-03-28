/**
 * @author: LK
 * @desc: BOM
 */

/**
 * BOM--window-------------------------------------------------------------
 */
let bom = document.getElementsByClassName('box')[0];
bom.onclick = function () {
    // console.log(1,window.devicePixelRatio);
    // console.log(2,window.innerHeight);
    // console.log(3,window.innerWidth);
    // console.log(4,document.body.clientHeight);
    // console.log(5,document.body.clientWidth);
    // window.open('https://www.baidu.com','likui','height=400,width=400,top=10,left=10')
    // window.close()
    // alert('likui');
    // let val1 = confirm('confirm');
    // let val2 = prompt('prompt');
    // console.log(val1);
    // console.log(typeof val2)
}


/**
 * BOM--location-------------------------------------------------------------
 */
// let bom = document.getElementsByClassName('box')[0];
// bom.onclick = function () {
//     // location.assign('https://www.baidu.com/');
//     // location.href = 'https://www.baidu.com/';
//     // location.replace('https://www.baidu.com/');
//     // let temp = [];
//     // for (let i in location) {
//     //     temp.push(i);
//     // }
//     let p = getParams();
//     console.log(p);
// }
// window.location.href = `http://127.0.0.1:5500/FrontEnd/html/index.html?name=likui&age=25&sex=boy&mobile=13135519763`;
// const getParams = () => {
//     let params = window.location.search;
//     params = params.length > 0 ? params.substring(1) : '';
//     let arr = params.split("&").map(i => i.split('='));
//     let obj = {};
//     arr.forEach(i => {
//         obj[i[0]] = i[1];
//     })
//     return obj;
// }
// let p = getParams();
// console.log(p);


/**
 * BOM--navigator-------------------------------------------------------------
 */
// let bom = document.getElementsByClassName('box')[0];
// bom.onclick = function () {
//     console.log(window.navigator.plugins);
// }
// console.log(window.navigator);



/**
 * BOM--screen-------------------------------------------------------------
 */
//  console.log(window.screen);



/**
 * BOM--history-------------------------------------------------------------
 */
//  console.log(window.history.state);

