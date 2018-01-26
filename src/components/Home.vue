<template>
  <div id="wrapper" class="kangaroo-default">
        home 首页

  </div>
</template>

<script>
import NavMenu from './NavMenu'

const putMenuQueryParam = (menu, params) => {
  if(menu.link){
    menu.link.query = Object.assign(menu.link.query || {}, params)
  }
}

export default {
  name: 'HelloWorld',
  data() {
    return {
      selectedPoi: {
        wmPoiId: 1111
      },
      menus1: [{
        icon: 'fa-custom-list',
        text: '商品管理',
        children: [
          {text: '商品列表', link: {path: '/profile'}},
          {text: '批量新建', link: {path: '/user'}},
          {text: '批量修改', link: {path: '/login'}},
          {text: '批量删除', link: {path: '/#'}},
          {text: '进度查询', link: {path: '/#'}},
          {text: '购物袋管理', link: {path: '/#'}}
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
<style scoped>
  .padding {
    width: 30%;
  }
</style>
