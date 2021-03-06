import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Index'
import Article from '@/pages/article/Index'
import Player from '@/components/Player'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home',
      name: 'HelloWorld',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/article',
      name:'Article',
      component:Article
    },
    {
      path:'/player',
      name:'Player',
      component:Player
    }
  ]
})
