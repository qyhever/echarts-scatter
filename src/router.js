import Vue from 'vue'
import Router from 'vue-router'
import Scatter from './views/scatter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // { path: '/', redirect: '/scatter' },
    { path: '/', name: 'scatter', component: Scatter }
  ]
})
