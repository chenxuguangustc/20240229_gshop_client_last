/* 
包含应用的所有接口的接口请求函数
函数内部调用Ajax函数发送请求
函数返回的是Promise对象，
*/

import ajax from './ajax'

//获取商品的三级分类列表,不写default，因为有多个要暴露，
export const reqBaseCategoryList = ()=>ajax.get('/product/getBaseCategoryList')

// Ajax相当于axios，axios发请求后都返回Promise，