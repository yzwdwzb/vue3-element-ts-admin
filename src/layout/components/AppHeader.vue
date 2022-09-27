<template>
    <el-page-header :icon="showIcon" title=" " @back="changeCollapse">
        <template #content>
            <span class="text-large font-600 mr-3 title-font"> {{title}} </span>
        </template>
        <template #extra>
            <div class="flex items-center ">
                <el-dropdown v-if="store.isLogin">
                    <span class="el-dropdown-link">
                        <el-avatar :size="32" class="mr-3" fit="cover"
                            :src="store.userInfo.avatar" />
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item disabled>{{store.userInfo.nickName}}</el-dropdown-item>
                            <el-dropdown-item divided>用户中心</el-dropdown-item>
                            <el-dropdown-item>店铺后台</el-dropdown-item>
                            <el-dropdown-item divided @click="outLogin">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <span v-else @click="toLogin">登录</span>
            </div>
        </template>
    </el-page-header>
</template>


<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/stores/store'
import { useRoute } from 'vue-router'
export default defineComponent({
    name: 'AppHeader',
    setup() {
        const route = useRoute()
        const store = useStore()
        const changeCollapse = store.changeCollapse
        const outLogin = store.outLogin
        
        const showIcon = computed(() => {
            return store.isCollapse ? 'Expand' : 'Fold'
        })
        const title = computed(() => {
            try {
                return route.meta.title
            } catch (error) {
                return ''
            }
        })
        const toLogin = ()=>{
            store.routerTo('/login')
        }
        return {
            title,
            showIcon,
            store,
            outLogin,
            changeCollapse,
            toLogin
        }
    }
});
</script>

<style scoped>
.title-font {
    font-weight: bold;
    font-size: 15px;
}
</style>