<template>
  <div style="width: 150px; height: 110px">
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
      default: //默认参数
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

<style scoped>
/* 带有作用域的样式 */
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
