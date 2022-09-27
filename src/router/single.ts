import type {RouteRecordRaw} from 'vue-router'
export const singleList: RouteRecordRaw[] = [
    {
        path:'/login',
        name:'login',
        component: () => import(/* webpackChunkName: "about" */ '@/views/login/LoginView.vue'),
    }
]