//入口文件
import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import "./eventBus";
import store from "./store";

//全局配置，一开始就要触发
store.dispatch("setting/fetchSetting");
Vue.config.productionTip = false;

//导入showMessage方法
import showMessage from "./utils/showMessage";
//将showMessage方法注入到Vue原型上，方便全局使用，不用在调用
Vue.prototype.$showMessage = showMessage;

//注册全局指令
import vLoading from "./directives/loading.js"; //引入所需的指令执行体
import vLazy from "./directives/lazy.js";
Vue.directive("loading", vLoading); //将指令执行体挂载到执行头上
Vue.directive("lazy", vLazy);

import "./api/banner.js";

//vue实例
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

window.store = store;

/**
 * 随便测试一下接口
 */
// import { getSetting } from "./api/setting";
// getSetting().then((res) => {
//   console.log("获取设置信息：", res);
// });
