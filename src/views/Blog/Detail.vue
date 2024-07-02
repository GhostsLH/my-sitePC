<template>
  <Layout>
    <div class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogToc :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData"; //加载中效果
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogToc from "./components/BlogToc.vue";
export default {
  components: {
    Layout,
    BlogDetail,
    BlogToc,
  },
  mixins: [fetchData(null)], //默认值空对象/null
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
  },
};
</script>

<style lang="less" scoped>
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth; //点击滚动至指定位置效果
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
}
</style>