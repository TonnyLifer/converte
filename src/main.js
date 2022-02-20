import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import store from './store'
import Multiselect from '@suadelabs/vue3-multiselect'
import router from './router/router'
const app = createApp(App)


app.use(Quasar, quasarUserOptions);
app.use(store);
app.use(router);
app.mount('#app');
app.component('multiselect', Multiselect);