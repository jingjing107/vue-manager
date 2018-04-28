import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

import BookList from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/',
      component: Home,
      name: '图书管理',
      redirect: '/list',
      menuShow: true,
      leaf: true, // 只有一个节点
      iconCls: 'iconfont icon-home',
      children: [
        {path: '/list', component: BookList, name: '图书列表', menuShow: true}
      ]
    }
  ]
})
