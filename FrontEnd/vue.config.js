module.exports = {
  lintOnSave: false,
  publicPath: "./",
  assetsDir: "static",
  productionSourceMap: false,
  // string | Object 代理设置
  devServer: {
    open: true, // 是否自动打开浏览器页面
    host: "0.0.0.0", // 指定使用一个 host。默认是 localhost
    port: 8099, // 端口地址
    https: false, // 使用https提供服务
    proxy: null,
    // proxy: {
    //   "/api": {
    //     target: "",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "/api": "",
    //     },
    //   },
    // },
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        additionalData: `@import "~@/common/styles/index.sass"`,
      },
      scss: {
        additionalData: `@import "~@/common/styles/index.scss";`,
      },
    },
  },
};
