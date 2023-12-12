<template>
  <div>
    <Avatar :url="url[0]" :size="size" />
    <Avatar :url="url[1]" :size="size" />
  </div>
</template>

<script>
import Avatar from "./";
export default {
  name: "ghosts",
  components: {
    Avatar,
  },
  data() {
    return {
      name: "魁拔",
      url: [
        "https://img2.baidu.com/it/u=4211127771,548631019&fm=253&fmt=auto&app=138&f=JPEG?w=801&h=500",
        "https://img0.baidu.com/it/u=3979551772,237278439&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1422",
      ],
      size: 100,
      firstName: "古瑞德",
      lastName: "亚特兰蒂斯",
    };
  },
  methods: {
  },
};
</script>

<style scoped>
/* 父组件的独立作用域会形成对应独立样式名，所以所写的样式会因为样式名的原因针对相对应组件生效，不会污染别的 */
.iconfont {
  font-size: 26px;
  color: aqua;
}
</style>
