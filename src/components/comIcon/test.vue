<template>
  <div class="test-container">
    <div class="item" v-for="t in types" :key="t">
      <Icon :type="t" />
      <label>{{ t }}</label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./";
export default {
  name: "ghosts",
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
  methods: {},
};
</script>

<style scoped>
/* 父组件的独立作用域会形成对应独立样式名，所以所写的样式会因为样式名的原因针对相对应组件生效，不会污染别的 */
.test-container {
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 580px;
  flex-wrap: wrap;
}
.item {
  margin: 1em;
  text-align: center;
}
.icon-container {
  display: block;
}
</style>
