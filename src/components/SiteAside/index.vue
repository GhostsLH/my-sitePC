<template>
  <div class="site-aside-container">
    <div class="avatar-container">
      <Avatar
        url="https://img0.baidu.com/it/u=3979551772,237278439&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1422"
      />
      <h1 class="title">魁拔</h1>
      <Menu />
      <Contact />
      <p class="footer">秦ICP备2628680821号-1</p>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/val.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  .title{
    font-size: 1em;
    color: #fff;
    text-align: center;
  }
  .avatar-container {
    margin: 0 auto;
    .footer {
      text-align: center;
      font-size: 12px;
    }
  }
}
</style>
