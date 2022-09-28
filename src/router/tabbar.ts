import type {RouteRecordRaw} from 'vue-router'
import LayoutView from '@/layout/LayoutView.vue'
export const tabbars: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'dashboard',
    meta: {
      title:'Dashboard',
      icon:'Odometer',
      hasSub:false
    },
    component: LayoutView,
    children: [{
        path:'/',
        name:'dashboard',
        meta: {
          title:'Dashboard',
          icon:'Odometer'
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/dashboard/Dashboard.vue'),
    }]
  },{    //TODO:
    path: '/set',
    name: 'set',
    meta: {
      title:'DataCenter',
      icon:'DataLine',
      hasSub:true
    },
    component: LayoutView,
    children: [{
        path:'/set/account',
        name:'account',
        meta: { title:'EarningsData'},
        component: () => import(/* webpackChunkName: "about" */ '@/views/set/SetAccount.vue'),
    }]
  },{    //TODO: 
    path: '/set',
    name: 'set',
    meta: {
      title:'Components',
      icon:'Box',
      hasSub:true
    },
    component: LayoutView,
    children: [{
        path:'/set/account',
        name:'account',
        meta: {title:'Components-1'},
        component: () => import(/* webpackChunkName: "about" */ '@/views/set/SetAccount.vue'),
    }]
  },
  {
    path: '/set',
    name: 'set',
    meta: {
      title:'Permission',
      icon:'Setting',
      hasSub:true
    },
    component: LayoutView,
    children: [
      {
        path:'/set/account',
        name:'account',
        meta: {
          title:'User Account',
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/set/SetAccount.vue'),
    }
  ]
  }, 
  {
    path: '/error',
    name: 'error',
    meta: {
      title:'ErrorPage',
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
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/error/404.vue'),
    },{
      path:'/error/500',
      name:'500',
      meta: {
        title:'500',
      },
      component: () => import(/* webpackChunkName: "about" */ '@/views/error/500.vue'),
  },
  ]
  },
];