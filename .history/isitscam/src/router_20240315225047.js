import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Default.vue'),
    children: [
        {
            path: 'home',
            name: 'Home',
            component: () => import('./views/Home.vue'),
        },
        {
            path: 'home',
            name: 'Home',
            component: () => import('./views/Home.vue'),
        },
        
    ]
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
    if (to.name === from.name) return;

    // if (from.name === 'GenerateQuestions') {
    //     localStorage.removeItem('evaluai_generate_questions')
    //     localStorage.removeItem('evaluai_inputs')
    // }
})

export default router