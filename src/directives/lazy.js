import eventBus from "@/eventBus"; //导入供后续方便使用
import { debounce } from "@/utils"; //导入函数防抖
import defaultGif from "@/assets/default.gif";

let imgs = [];

function setImage(img) {
  img.dom.src = defaultGif; //先暂时使用默认图片

  //处理图片
  //该图片是否在视口范围内
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  const height = rect.height || 150;
  if (rect.top >= -height && rect.top <= clientHeight) {
    //在视口范围内
    const tempImg = new Image();
    tempImg.onload = function () {
      //当真实图片加载完成之后
      img.dom.src = img.src;
    };
    tempImg.src = img.src;
    imgs = imgs.filter((i) => i !== img);
  }
}
//希望，调用该函数，就可以设置那些合适的图片
function setImages() {
  for (const img of imgs) {
    //处理该图片
    setImage(img);
  }
}

//调用函数防抖，解决触发过快
function handleScroll(dom) {
  setImages();
}

//针对滚动而触发的操作进行对应处理
eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value,
    };
    imgs.push(img);
    //立即处理它
    setImage(img);
  },
  unbind(el) {
    imgs = imgs.filter((img) => img.dom !== el);
  },
};
