import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//in your `main.js` file
import '../node_modules/flowbite-vue/dist/index.css'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
const app = createApp(App)
app.mount('#app')