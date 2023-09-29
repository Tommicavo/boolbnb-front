import { createRouter, createWebHistory } from 'vue-router';
import EstatesList from '../components/estates/EstatesList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/estates', name: 'estates', component: EstatesList },
        // { path: '/estates/:id', name: 'estate-detail', component: EstateDetail }
    ]
})

export { router };