<template>
  <div class="avatar-container">
    <img
      class="avatar-img"
      :src="url"
      :alt="alt"
      :style="{
        width: size + '%',
        height: size + '%',
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String, // 类型
      required: true, //必传参数
      //默认参数
      default:
        "https://img0.baidu.com/it/u=3979551772,237278439&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1422",
    },
    size: {
      type: Number,
    },
  },
  data() {
    return {
      alt: "这是一张图片",
    };
  },
};
</script>

<style scoped lang="less">
/* 带有作用域的样式 */
.avatar-container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  .avatar-img {
    border-radius: 50%;
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
