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
        path: '/search/:keyword',
        component: Search
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