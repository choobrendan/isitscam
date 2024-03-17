// Routes
import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Report from '../views/Report.vue'

const routes = [
  { path: '/', name: 'Home', component: Home  },
  { path: '/main', name: 'Main', component: Main },
  { path: '/report', name: 'Report', component: Report },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router