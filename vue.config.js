const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

//vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://www.duyiedu.com",
      },
    },
  },
};
