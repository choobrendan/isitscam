import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//in your `main.js` file
import '../node_modules/flowbite-vue/dist/index.css'

// Router
import router from './router/index.js'

// Components
import ScamCard from './components/ScamCard.vue'
import Logo from './components/Logo.vue'

const app = createApp(App)
app.component('scam-card',ScamCard)
app.use(router)
app.mount('#app')
