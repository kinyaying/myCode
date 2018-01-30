/**
 * Created by jinyaying on 2018/1/25.
 */

import Vue from 'vue'
import iView from 'iview';
import App from './App.vue'
import 'iview/dist/styles/iview.css';
Vue.use(iView);
new Vue({
  el: '#app',
  render: h => h(App)

})


