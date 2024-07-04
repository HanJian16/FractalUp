import { createApp, provide, h } from 'vue'
import { ApolloClients } from '@vue/apollo-composable'
import App from './App.vue'
import router from './router'
import apolloClient from './apolloclient'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@/scss/main.scss'

const app = createApp({
    setup() {
        provide(ApolloClients, {
            default: apolloClient,
        });
    },
    render: () => h(App),
});

app.use(router).use(store).mount('#app')
