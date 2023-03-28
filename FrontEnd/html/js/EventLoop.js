/**
 * @author: LK
 * @desc: event-loop
 */

// 事件循环机制由三部分组成（调用栈、微任务队列、消息队列）
// event-loop开始的时候，会从全局一行一行的执行，遇到函数调用，会压入到调用栈中，被压入的函数被称之为帧，当函数返回后会从调用栈中弹出
// js中的异步操作，比如fetch、seTimeout、setInterval压入调用栈的时候里面的消息会进去到消息队列中去，消息队列中会等到调用栈清空之后在执行



