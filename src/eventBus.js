/**
 * 自定义事件总线
 * 
 * const listeners = {};    //监听者列表
 * 
 * // 自定义事件总线
export default {
  //开始监听某一个事件
  $on(eventName, handler) {
    // 判断事件是否存在其中
    if (!listeners[eventName]) {
      listeners[eventName] = new Set(); //不存在就创建一个set集合
    }
    listeners[eventName].add(handler); //将事件添加到监听队列中
  },
  //取消监听某一个事件
  $off(eventName, handler) {
    if (!listeners[eventName]) {
      //当前事件不存在直接return
      return;
    }
    listeners[eventName].delete(handler); //取消事件的监听
  },
  //触发事件
  $emit(eventName, ...args) {
    if (!listeners[eventName]) {
      return;
    }
    for (const handler of listeners[eventName]) {
      handler(...args); //执行事件绑定的函数
    }
  },
};
 * 
 */

// 常用形事件总线--因为vue实例里面本身就包括事件触发取消等操作所以new一个vue实例然后调用即可
import Vue from "vue";
/**
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * -滚动的dom元素
 */
Vue.prototype.$bus = new Vue({});
