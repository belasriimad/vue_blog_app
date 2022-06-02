import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../components/Home.vue'
import PostDetails from '../components/PostDetails.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/post/:id',
            name: 'postDetails',
            component: PostDetails
        }
    ]
});

export default router