/* 
axios二次封装（因为本身就是对Ajax请求的一次封装），这里对axios进行二次封装
1. 配置通用的基础路径和超时
2. 显示请求进度条
3. 成功返回的数据不再是response, 而直接是响应体数据response.data
4. 统一处理请求错误, 具体请求也可以选择处理或不处理
*/

import axios from "axios"
import NProgress from "nprogress"
import 'nprogress/nprogress.css'

// 1、配置通用的基础路径和超时时间

// service是一个能发任意Ajax请求的函数，可以当做对象使用
const service = axios.create({
    baseURL: 'http://gmall-h5-api.atguigu.cn/api', // 基础路径
    timeout: 20000, //超时时间
})

// axios本身是函数，现在当做是对象在使用，通过.这样当做对象的属性方法
// service也是一个函数，不是对象，类的实例，axios和service从功能上都是Axios的实例，因为不是Axios直接new出来的
// 是把Axios的实例上原型的方法，以及实例上的属性都添加到axios上去了，函数也可以当对象使用，day02 18分钟，

// 添加请求拦截器,interceptors是一个对象，因为后面有一个request方法，有方法的就是对象，
// 拦截器本质上是一个回调函数，
service.interceptors.request.use((config) => {
    // config是当前请求的所有信息

    // 2、显示请求进度条，在请求拦截器中
    NProgress.start()

    // 必须返回config,后面根据返回的config，使用xhr对象发送Ajax请求，
    return config
})

// 添加响应拦截器,需要指定两个回调
service.interceptors.response.use(
    response => { //请求成功返回的回调
        // 隐藏请求进度条，在响应拦截器成功的回调中
        NProgress.done()

        // 不返回东西，后面发请求就收不到东西

        // 3、成功返回的数据不再是response，而直接是响应体数据response.data
        return response.data
    },

    error => { //请求失败返回的回调
        // 隐藏请求进度条，在响应拦截器失败的回调中
        NProgress.done()

        // throw error
        // 返回一个失败的promise，失败的原因是error

        // 统一处理一下错误
        alert( `请求出错: ${error.message||'未知错误'}`)
        return Promise.reject(error)
    }
)

export default service