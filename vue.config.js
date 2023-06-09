const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete("prefecth");
  },
};

const target='http://127.0.0.1:3000'; //proxy 요청을 보낼 서버 주소

module.exports={
  devServer:{
    port:8080,
    proxy:{
      //procy 욫청을 보낼 Api 시작 부분
      '^/api':{
        target, 
        changeOrigin: true
      }
    }
  }
}

