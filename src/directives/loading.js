import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

//得到el中loading效果的img元素
function getLoadingImage(el) {
  return el.querySelector("img[data-role=loading]");
}

//创建img元素
function createLoadingImg() {
  const img = document.createElement("img");
  img.dataset.role = "loading";
  img.src = loadingUrl;
  img.className = styles.loading;
  return img;
}

//导出指令的配置对象
export default function (el, binding) {
  //根据binding.value的值，决定创建或者删除img元素
  const curImg = getLoadingImage(el);
  if (binding.value) {
    if (!curImg) {
      //没有加载出数据的话，那就创建loading元素
      const img = createLoadingImg();
      el.appendChild(img);
    }
  } else {
    //img加载出来了那就删除loading
    if (curImg) {
      curImg.remove();
    }
  }
}
