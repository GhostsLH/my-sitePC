<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
import "@/styles/global.less";
export default {
  components: {
    Contact,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.test-container {
  width: 260px;
  height: 600px;
  border: 2px solid red;
  background: black;
  margin: 0 auto;
  padding-top: 200px;
}
</style>
