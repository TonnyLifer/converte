import list from '../components/list';
import converte from '../components/converte';
import {createRouter, createWebHashHistory} from 'vue-router';


const routes = [
    {
        path: '/',
        component: list
    },
    {
        path: '/converte',
        component: converte
    }
]

const router = createRouter({
    routes,
    history:createWebHashHistory(process.env.BASE_URL)
    })

export default router;
