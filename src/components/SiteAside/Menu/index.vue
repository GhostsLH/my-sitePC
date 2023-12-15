<template>
  <nav class="menu-container">
    <RouterLink
      :exact="item.exact"
      v-for="item in items"
      :key="item.link"
      :to="{ name: item.name }"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/comIcon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          link: "/",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          link: "/blog",
          title: "文章",
          icon: "blog",
          startWith: true,
          exact: false, //激活状态是否要精确匹配
        },
        {
          name: "About",
          link: "/about",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          link: "/project",
          title: "项目&效果",
          icon: "home",
          exact: true,
        },
        {
          name: "Message",
          link: "/message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/val.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    &.selected {
      background: #2d2d2d;
    }
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
