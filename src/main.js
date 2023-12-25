//入口文件
import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
Vue.config.productionTip = false;

//导入showMessage方法
import showMessage from "./utils/showMessage";
//将showMessage方法注入到Vue原型上，方便全局使用，不用在调用
Vue.prototype.$showMessage = showMessage;

import "./api/banner.js";

//vue实例
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
