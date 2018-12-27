import Vue from 'vue'
import Router from 'vue-router'
import PostComponent from '../components/postComponent.vue'
import About from '../components/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "postComponent",
      component: PostComponent
    },
    {
      path: '/about',
      name: "about",
      component: About
    }
  ]
})
