import { createRouter, createWebHistory } from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import LayoutView from '@/layout/LayoutView.vue'
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: {
      title:'首页',
      icon:'House',
      hasSub:false
    },
    component: LayoutView,
    children: [
      {
        path:'/',
        name:'home',
        meta: {
          title:'首页',
          icon:'House'
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/home/HomeView.vue'),
    }
  ]
  },
  {
    path: '/set',
    name: 'set',
    meta: {
      title:'设置',
      icon:'Setting',
      hasSub:true
    },
    component: LayoutView,
    children: [
      {
        path:'/set/account',
        name:'account',
        meta: {
          title:'账户设置',
          icon:'Setting'
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/set/SetAccount.vue'),
    }
  ]
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


