module.exports = {
  // lintOnSave: false, // 关闭ESLint的规则检查
  lintOnSave: false, // 输出提示错误, 但项目继续运行


  // 配置代理，用于解决跨域的问题，
  devServer: { //devServer表示只用于开发环境
    proxy: {
      '/api': { // 只对请求路由以/api开头的请求进行代理转发，这个表示请求者自己本身的路径，localhost/8080/api,对这个地址进行转发，将请求的地址转换成localhost/8080/api 这个地址
        target: 'http://gmall-h5-api.atguigu.cn/', //这个是进行转发的目标url
        changeOrigin: true // 支持跨域
         // pathRewrite: {‘^/api’: ‘’} //后台接口情况
      }
    }
  },
}