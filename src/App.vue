<template>
  <div id="app">
    <div style="width: 200px;">
      app.vue
    </div>
    <main class="content">
      <Row>
        <Col span="8">
        <Menu :theme="theme2" accordion>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"></Icon>
              用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="stats-bars"></Icon>
              统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
        </Col>
      </Row>
      <br>
      <p>Change theme</p>
      <RadioGroup v-model="theme2">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
      </RadioGroup>
    </main>
  </div>
</template>

<script>
  // import {Menu} from './menu/index.js'
export default {
  name: 'app',
  data() {
      return {
        theme2: 'dark'
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
