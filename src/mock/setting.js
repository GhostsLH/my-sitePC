import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar:
      "https://img0.baidu.com/it/u=3979551772,237278439&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1422",
    siteTitle: "古瑞德·亚特兰蒂斯·芬里厄",
    github: "https://github.com/Ghots",
    qq: "2311524062",
    qqQrCode:
      "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    weixin: "GreadaAtlantis",
    weixinQrCode:
      "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    mail: "2311524062@qq.com",
    icp: "秦ICP备2628680821号",
    githubName: "Ghots",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
