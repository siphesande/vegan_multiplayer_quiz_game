import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Oneplayer from '@/components/Oneplayer'
import More from '@/components/More'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/oneplayer',
      name: 'Oneplayer',
      component: Oneplayer
    }
  ]
})
