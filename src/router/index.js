import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const IndexView = ()=> import('../views/Index/Index.vue')
const NewsView = ()=> import('../views/News.vue')
//const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))



const routes = [
  { path: '/news', component: NewsView },
  { path: '/', component: IndexView }
]


export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes
  })
}
