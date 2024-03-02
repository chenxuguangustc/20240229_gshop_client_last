<template>
  <div>
    <h2>Search组件</h2>
    <!-- 取路由传参的数据 -->
    <h3>{{ $route.params.keyword }}</h3>
    <h3>{{ $route.query.keyword2 }}</h3>
    <h3>props.keyword3: {{ keyword3 }}</h3>
    <h3>props.keyword4: {{ keyword4 }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Search',

  // 接收props属性先进行声明，
  props: ['keyword3', 'keyword4'],
}
</script>

<style lang="less" scoped>

</style>
