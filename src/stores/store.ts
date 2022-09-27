import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state() {
    return {
      isCollapse: true,
      pathActive: "/home",
      userInfo: {
        nickName: "wangzb",
        account: "admin",
        rootId: "1",
        rootName: "管理员",
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
    },
    changeCollapse() {
        this.isCollapse = !this.isCollapse
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
