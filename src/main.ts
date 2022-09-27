import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'   //pinia 持久化插件
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import {router} from './router'

const store = createPinia()
store.use(piniaPluginPersist)

const app = createApp(App)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(store)
    .use(router)
    .use(ElementPlus, { size: 'small', zIndex: 3000 })
    .mount('#app')


