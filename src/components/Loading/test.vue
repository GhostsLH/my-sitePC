<template>
  <div>
    <Loading v-if="loadingStatus" />
    <button @click="setLoadingStatus">切换显示/隐藏</button>
  </div>
</template>

<script>
import Loading from "./index.vue";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      loadingStatus: true,
    };
  },
  methods: {
    setLoadingStatus() {
      this.loadingStatus =!this.loadingStatus;
    },
  },
};
</script>

<style>
</style>