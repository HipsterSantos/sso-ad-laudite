import { createApp } from 'vue'
import App from './App.vue'
import * as appRouter from './router/appRouter';
import store from './store/index';

createApp(App)
.use(appRouter.routeConfig)
.use(store)
.mount('#app')
;
