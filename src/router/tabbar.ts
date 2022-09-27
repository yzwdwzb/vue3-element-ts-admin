import type {RouteRecordRaw} from 'vue-router'
import LayoutView from '@/layout/LayoutView.vue'
export const tabbars: RouteRecordRaw[] = [
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
  },{
    path: '/error',
    name: 'error',
    meta: {
      title:'错误',
      icon:'Warning',
      hasSub:true
    },
    component: LayoutView,
    children: [
      {
        path:'/error/404',
        name:'404',
        meta: {
          title:'404',
          icon:'DocumentDelete'
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/error/404.vue'),
    },{
      path:'/error/500',
      name:'500',
      meta: {
        title:'500',
        icon:'FolderDelete'
      },
      component: () => import(/* webpackChunkName: "about" */ '@/views/error/500.vue'),
  },
  ]
  },
];