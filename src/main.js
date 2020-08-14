import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

// window.__VUE__ = true;

if (process.env.VUE_APP_MOCK === 'true') {
  require('../mock')
}

createApp(App).use(router).use(store).mount('#app')
