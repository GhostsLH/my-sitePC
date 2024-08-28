<template>
  <div>
    <Pager :current="current" @pageChange="pageChange" :total="total" />
  </div>
</template>

<script>
import Pager from "./";
export default {
  name: "ghosts",
  components: {
    Pager,
  },
  data() {
    return {
      name: "魁拔",
      current: 26,
      total: 2628,
    };
  },
  methods: {
    pageChange(newPage) {
      this.current = newPage;
    },
  },
};
</script>

<style scoped>
/* 父组件的独立作用域会形成对应独立样式名，所以所写的样式会因为样式名的原因针对相对应组件生效，不会污染别的 */
</style>
