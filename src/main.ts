import { createApp } from 'vue'
import './style.css'//全局样式设置，先删掉其中的内容
import App from './App.vue'
import router from '@/router'//引入vue-router
 
const app = createApp(App)
 
app.use(router as any)//引入vue-router
app.mount('#app')