<template>
  <div class="empty-container">
    <Icon type="empty" class="icon-empty" />
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
import Icon from "../comIcon";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: `无数据`,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/val.less";
.empty-container {
  text-align: center;
  color: @gray;
  .self-center();

  .icon-empty {
    font-size: 120px;
  }
}
</style>
