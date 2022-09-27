import { defineStore } from "pinia";

import {  router} from '@/router';

export const useStore = defineStore("store", {
  state() {
    return {
      isCollapse: true,
      pathActive: "/home",
      userInfo: {
        nickName: "",
        userName: "",
        rootId: "",
        rootName: "",
        token:'',
        avatar:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
    };
  },
  getters:{
    isLogin():boolean{
      return this.userInfo.rootId !== ''
    }
  },
  actions:{
    outLogin() {
        this.userInfo.rootId = ''
        this.userInfo.token = ''
        this.routerTo('/login')
    },
    changeCollapse() {
        this.isCollapse = !this.isCollapse
    },
    routerTo(path:string){
      router.push({path})
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        paths: ["userInfo"],    //需要持久化的key
        storage: localStorage,
      },
    ],
  },
});
