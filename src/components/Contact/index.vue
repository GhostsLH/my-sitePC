<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>DuYi-Edu</span>
      </a>
      <div class="pop">
        <img src="@/static/ylj.png" alt="" />
      </div>
    </li>
    <li>
      <a href="mailto:2311524062@qq.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>2311524062@qq.com</span>
      </a>
      <div class="pop">
        <img src="@/static/ylj.png" alt="" />
      </div>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=1561506908&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>2311524062</span>
      </a>
      <div class="pop">
        <img src="@/static/ylj.png" alt="" />
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>ghosts</span>
      </a>
      <div class="pop">
        <img src="@/static/ylj.png" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/comIcon";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/val.less";
.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    cursor: pointer;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .icon {
    font-size: 26px;
    width: 36px;
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 10px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: -4px;
    }
  }
}
</style>
