//入口文件
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";

Vue.config.productionTip = false;

import showMessage from "./utils/showMessage";
window.showMessage = showMessage;

showMessage("ghosts", "success");
//vue实例
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
