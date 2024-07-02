<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="toc" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleSelect(item) {
      // 改动哈希实现锚点跳转
      window.location.hash = item.anchor;
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>