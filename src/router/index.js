import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Profile from '@/pages/Profile.vue'
import Login from '@/components/Login.vue'
import User from '@/pages/User.vue'
import NewPage from '@/pages/NewPage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/home',
      component: Home
    },
    { path: '/newPage', component: NewPage },
    { path: '/user', component: User },
    { path: '/profile', component: Profile },
    { path: '/login', component: Login }
  ]
})
