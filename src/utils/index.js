export { default as showMessage } from "./showMessage";
export { default as getComponentRootDom } from "./getComponentRootDom";
export { default as formatDate } from "./formatDate";
export { default as debounce } from "./debounce";
//默认导入  ./showMessage
//然后通过index.js 导出
// as重命名一下。后面是名字

/**
 * 等同于这两句话的总和，先导入，后导出暴露到全局待使用
 * import showMessage from "./showMessage"
 * export {showMessage}
 */
