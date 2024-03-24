// Routes
import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Report from '../views/Report.vue'

const routes = [
  { path: '/', name: 'Main', component: Main },
  { path: '/home', name: 'Home', component: Home, props: true }, // Define route prop for Home
  { path: '/report', name: 'Report', component: Report },
  { path: '/report', name: 'Report', component: Report },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
