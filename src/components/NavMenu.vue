<template>
  <aside class="multiple single kui-nav-menu">
    <div class="sidebar-inner scrollable-sidebar">
      <div class="main-menu active">
        <ul v-if="menu && menu.length">
          <li class="openable" v-for="(m, index) in menu" :key="index" :class="{ active: isActive(m) }">
            <a class="nav-header" href="javascript:;"
               :class="{ collapsed: expandedMenu !== m }"
               @click="menuClick(m)">
              <div class="fa-wrapper">
                <i :class="'fa fa-lg ' + m.icon"></i>
              </div>
              <span class="text">{{ m.text }}</span>
              <span class="menu-hover"></span>
            </a>
            <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
                        @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave"
                        @leave-cancelled="leaveCancelled">
              <ul class="nav nav-list" v-if="m.children && m.children.length" v-show="expandedMenu === m">
                <li v-for="(c, index2) in m.children" :key="index2" :class="{ active: isActive(c) }">
                  <a href="javascript:;" @click.stop="menuClick(c)">
                    <span class="submenu-label">{{ c.text }}</span>
                  </a>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
  export default {
    name: 'KuiNavMenu',
    props: {
      menu: {
        type: Array,
        default() {
          return []
        }
      },
      defaultActive: {
        default: null
      }
    },
    data() {
      const { menu, defaultActive } = this
      return {
        expandedMenu: menu.filter(p => {
          return (p.children || []).filter(m => m === defaultActive).length > 0
        })[0],
        activeMenu: defaultActive,
        height: 0
      }
    },
    methods: {
      menuClick(menu) {
        const children = menu.children
        if (children && children.length > 0) {
          if (this.expandedMenu === menu) {
            this.expandedMenu = null
          } else {
            this.expandedMenu = menu
          }
        } else {
          this.activeMenu = menu
        }
        const link = menu.link
        if (link) {
          if (typeof link === 'string') {
            location.href = link
          } else {
            this.$router.push(link)
          }
        }
        this.$emit('menu-click', menu)
      },
      isActive(menu) {
        if (menu === this.activeMenu) {
          return true
        }
        const children = menu.children
        if (children && children.length > 0) {
          if (children.filter(p => this.isActive(p)).length > 0) {
            return true
          }
        }
        return false
      },
      beforeEnter(el) {
        el.style.display = 'block'
        console.log('beforeEnter:::', el.clientHeight)
        this.height = el.clientHeight
        el.classList.add('collapsing')
      },
      enter(el) {
        setTimeout(() => {
          el.style.height = this.height + 'px'
        })
      },
      afterEnter(el) {
        el.classList.remove('collapsing')
      },
      beforeLeave(el) {
        console.log('beforeLeave:::', el.clientHeight)
        // this.height = el.clientHeight
        // el.style.height = this.height + 'px'
        el.classList.add('collapsing')
      },
      leave(el) {
        console.log('leave::', el)
        setTimeout(() => {
          el.style.height = '0px'
        })
      },
      afterLeave(el) {
        el.classList.remove('collapsing')
        el.style.height = ''
      },
      leaveCancelled(el) {
        el.style.height = ''
      }
    },
    watch: {
      '$route'(val) {
        this.expandedMenu = this.menu.filter(m => this.isActive(m))[0]
      }
    }
  }
</script>

<style lang="less">
  .kui-nav-menu {
    background-color: #203544 !important;
    position: static !important;
    padding: 0 !important;
  }

</style>
