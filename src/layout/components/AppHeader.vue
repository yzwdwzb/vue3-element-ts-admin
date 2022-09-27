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
                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item disabled>admin</el-dropdown-item>
                            <el-dropdown-item divided>用户中心</el-dropdown-item>
                            <el-dropdown-item>店铺后台</el-dropdown-item>
                            <el-dropdown-item divided @click="outLogin">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <span v-else>登录</span>
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
        return {
            title,
            showIcon,
            store,
            outLogin,
            changeCollapse
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