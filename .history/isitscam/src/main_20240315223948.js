import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter } from 'vue-router'
//in your `main.js` file
import '../node_modules/flowbite-vue/dist/index.css'
createApp(App).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')