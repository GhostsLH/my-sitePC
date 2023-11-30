<template>
  <i class="iconfont" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "icon-xiangshang",
  arrowDown: "icon-xiangxia",
  empty: "icon-empty",
  chat: "iconliuyan",
};
export default {
  name: "icon",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    //图标类样式
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/c/font_4360297_mj19t7ydl8j.css";
</style>
