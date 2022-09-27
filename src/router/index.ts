import { createRouter, createWebHistory } from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
// import LayoutView from '@/layout/LayoutView.vue'
import {singleList} from './single'
import { tabbars } from './tabbar'

export const routes: RouteRecordRaw[] = [
  ...singleList,
  ...tabbars
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


