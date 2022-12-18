import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'
import { createPinia } from 'pinia'
import PrimeVue from './plugins/prime-vue'

import App from './App.vue'
import router from './router'

import '@/assets/style.scss'

const app = createApp(App)

app.use(PrimeVue)
app.use(createPinia())
app.use(router)
app.use(
    createAuth0({
        domain: "dev-tt5z4nesi4knte53.us.auth0.com",
        client_id: "8JpnQUAIbx1YV5L0RfNqUVEUv6G8wvhj",
        redirect_uri: `${window.location.origin}/dashboard`
    })
)

app.mount('#app')
