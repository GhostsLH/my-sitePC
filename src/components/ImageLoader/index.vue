<template>
  <div class="image-loader-container">
    <img
      v-if="!everythingDone"
      class="placeholder"
      :src="placeholder"
      alt="这是一张占位图"
    />
    <img
      @load="handleLoaded"
      class="origin"
      :src="src"
      alt="原图"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    // 原图链接
    src: {
      type: String,
      required: true,
    },
    // 替换图片
    placeholder: {
      type: String,
      required: true,
    },
    // 替换时间
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false, //原图是否加载完成
      everythingDone: false, //是否完成所有操作
    };
  },
  methods: {
    handleLoaded() {
      this.originLoaded = true;
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .origin {
    opacity: 0;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>
