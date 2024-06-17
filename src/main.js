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

//注册全局指令
import vLoading from "./directives/loading.js"; //引入所需的指令执行体
Vue.directive("loading", vLoading); //将指令执行体挂载到执行头上

import "./api/banner.js";

//vue实例
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

/**
 * 随便测试一下接口
 */

import * as blogApi from "./api/blog";

blogApi.getBlog("ghosts").then((r) => console.log(r));

blogApi
  .postComment({
    nickname: "昵称",
    content: "评论内容， 纯文本",
    blogId: "123",
  })
  .then((r) => console.log(r));
