<template>
  <div class="empty_content">
    <Empty />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
  data() {
    return {
      // text:'魁拔'
    };
  },
};
</script>

<style lang="less" scoped>
.empty_content{
  width: 100%;
  height: 600px;
  position: relative;
}
</style>
