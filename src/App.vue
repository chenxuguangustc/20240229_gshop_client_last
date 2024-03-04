<template>
  <div id="app">
    <Header></Header>
    <!-- 所有的一级路由都在此显示 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from '@/components/Footer'

// 分别暴露用 { }这种方式
// import { reqBaseCategoryList } from "./api";

export default {
  name: 'App',

  // app里面发请求
  mounted () {
    // 异步获取三级分类列表
    // reqBaseCategoryList().then(result => {
      
    // })

    // 分发请求获取分类列表的异步action
    this.$store.dispatch('getBaseCategoryList')
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
