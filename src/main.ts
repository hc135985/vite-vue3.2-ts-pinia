import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';
import 'element-plus/dist/index.css';
import { router } from './routers';
import App from './App.vue'
import './index.scss'

const app = createApp(App);
app.use(ElementPlus)
   .use(createPinia())
   .use(router)
   .mount('#app')
