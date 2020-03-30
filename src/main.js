import Vue from 'vue'
import App from './App.vue'
import dots from './components/Dots.vue'
import arrow from './components/Arrow.vue'
import threeDots from './components/ThreeDots'
// import popUp from './components/Popup'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import store from './store'


Vue.config.productionTip = false

Vue.use(PerfectScrollbar)

Vue.component('threeDots', threeDots);
// Vue.component('popUp', popUp);
Vue.component('dots', dots);
Vue.component('arrow', arrow );


var vue = new Vue({

  store,
  render: h => h(App)
}).$mount('#app')

