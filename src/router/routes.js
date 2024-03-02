/* 
所有路由匹配的数组
*/
import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'


export default [
    {
        path: '/',
        component: Home
    },
    {
        name: 'search',
        // params参数，
        // ?代表后面的参数可以是0也可以是1个，
        path: '/search/:keyword?',
        component: Search,
        // 只有当props为true时，将params参数映射成props,且只映射params参数
        // props: true

        // 函数接受当前路由信息对象作为参数，
        // 将路由跳转的params/query参数/自定义参数映射成props传递给路由组件
        props: (route) => ({
            keyword3: route.params.keyword,
            keyword4: route.query.keyword2
        })
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    }
]