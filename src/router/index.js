//导入vue
import Vue from 'vue'
//导入vue-router
import VueRouter from 'vue-router'
//导入elementui
import useElement from '../views/useElement/index.vue'

import Login from '../views/login/index.vue'
//使用VueRouter
Vue.use(VueRouter)
//创建一个新的vue-router对象
var router = new VueRouter({

    routes: [
        { path: '/login', component: Login },
        {path:'/useElement',component:useElement}
    ]
})
//将新的对象暴露出去
export default router