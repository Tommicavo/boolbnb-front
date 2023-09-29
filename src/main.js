import { createApp } from 'vue'
import App from './App.vue'

// Router
import { router } from './router'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Generics Components


// App
const app = createApp(App);
app.use(router);
app.mount('#app');
