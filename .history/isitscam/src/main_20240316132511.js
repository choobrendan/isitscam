import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//in your `main.js` file
import '../node_modules/flowbite-vue/dist/index.css'
import ScamCard from './components/ScamCard.vue'
const app = createApp(App)
App.component
app.mount('#app')