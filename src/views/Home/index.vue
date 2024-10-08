<template>
  <div
    class="home-container"
    ref="container"
    @wheel="handleWheel"
    v-loading="loading"
  >
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div v-show="index >= 1" @click="switchTo(index - 1)" class="icon icon-up">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
      class="icon icon-down"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        :class="{ active: i === index }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/val.less";

.home-container {
  height: 100%;
  width: 100%;
  // background: @dark;
  position: relative;
  overflow: hidden; //避免外边距合并

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}

.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;

  li {
    width: 100%;
    height: 100%;
  }
}

.icon {
  .self-center();
  font-size: 30px;
  @gap: 25px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);

  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }

  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }

  @jump: 5px;

  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }

    50% {
      transform: translate(-50%, -@jump);
    }

    100% {
      transform: translate(-50%, @jump);
    }
  }

  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }

    50% {
      transform: translate(-50%, @jump);
    }

    100% {
      transform: translate(-50%, -@jump);
    }
  }
}

.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;

  right: 20px;

  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;

    &.active {
      background: #fff;
    }
  }
}
</style>

<script>
import { mapState } from "vuex";
import CarouselItem from "./Carouselitem";
import Icon from "@/components/comIcon";

export default {
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      index: 0, // 当前显示的是第几张轮播图
      containerHeight: 0, //整个容器的高度
      switching: false, //是否正在切换中
    };
  },

  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  //组件销毁执行事件
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      //重新获取一下页面高度
      this.containerHeight = this.$refs.container.clientHeight;
    },
    //切换轮播图
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      //向上滚动
      if (e.deltaY < -5 && this.index > 0) {
        this.switching = true;
        this.index--;
        //向下滚动
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/val.less";

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  // 测试
  // width: 60%;
  // height: 40%;
  // overflow: visible;
  // border: 2px solid #008c8c;
  // margin: 100px auto;

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}

.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;

  li {
    width: 100%;
    height: 100%;
  }
}

.icon {
  .self-center();
  font-size: 30px;
  @gap: 25px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);

  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }

  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }

  @jump: 5px;

  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }

    50% {
      transform: translate(-50%, -@jump);
    }

    100% {
      transform: translate(-50%, @jump);
    }
  }

  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }

    50% {
      transform: translate(-50%, @jump);
    }

    100% {
      transform: translate(-50%, -@jump);
    }
  }
}

.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;

  right: 20px;

  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;

    &.active {
      background: #fff;
    }
  }
}
</style>
