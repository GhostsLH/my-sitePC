import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/comIcon";
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type  消息类型 info error success
 * @param {Number} duration 多久后小时，0为不消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中; 如果不传递，则会显示到页面正中
 */

export default function (content, type = "info", duration = 2000, container) {
  //创建消息元素
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, {
    type,
  });
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
  //将div加入到容器中
  //设置样式
  console.log(styles);
  const typeClassName = styles[`message-${type}`]; //类型样式名
  div.className = `${styles.message} ${typeClassName}`;
  if (!container) {
    container = document.body;
  } else {
    //容器的position是否改动过
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }
  container.appendChild(div);

  //浏览器强行渲染
  div.clientHeight; //导致reflow

  //回归到正常位置
  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;

  //等一段时间，消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `treanslate(-50%, -50%) translateY(-25px)`;
  }, duration);
}
