import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

// window.__VUE__ = true;

// 未用devServer是因为可能在生产环境使用mock
if (process.env.VUE_APP_MOCK === 'true') {
  require('../mock')
}

createApp(App).use(router).use(store).mount('#app')
