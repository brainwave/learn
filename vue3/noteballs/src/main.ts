/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createRouter, createWebHistory} from "vue-router";
import routes from "@/routes/routes";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
  }
)

const app = createApp(App)

registerPlugins(app)
app.use(router)
app.mount('#app')
