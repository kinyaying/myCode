<template>
  <div id="app">
    <div style="width: 200px;">
      <NavMenu class="menu-demo" :menu="menus1"></NavMenu>
    </div>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import '@waimai/kangarooui-vue/dist/kangarooui-vue-m.js'
import '@waimai/kangarooui-vue/dist/index-m.css'
import NavMenu from './components/NavMenu'
export default {
  name: 'app',
  data() {
      return {
          selectedPoi: {
            wmPoiId: 1111
          },
          menus1: [{
              icon: 'fa-custom-list',
              text: '商品管理',
              children: [
                  {text: '简介', link: {path: '/profile'}},
                  {text: '用戶', link: {path: '/user'}},
                  {text: '登录', link: {path: '/login'}},
                  {text: '首页', link: {path: '/home'}},
                  {text: '默认', link: {path: '/#'}},
                  {text: '默认', link: {path: '/#'}}
              ]
          },
          {
              icon: 'fa-custom-list',
              text: '订单管理',
              children: [
                {text: '订单查询', link: {path: '/#'}},
                {text: '订单导出', link: {path: '/#'}},
                {text: '订单异步导出', link: {path: '/#'}}
              ]
          }]
      }
  },
  computed: {
    menus2: function() {
      if(!this.selectedPoi) return []
      const params = {wmPoiId: this.selectedPoi.wmPoiId}
      return this.menus.map(menu => {
        putMenuQueryParam(menu, params)
        if(menu.children){
          menu.children.forEach(child => putMenuQueryParam(child, params))
        }
        return menu
      })
    }
  },
  components: {
    NavMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
