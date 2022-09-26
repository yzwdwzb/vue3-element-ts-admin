<template>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu :default-active="pathActive" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
        @close="handleClose">
        <template v-for="(item, index) of routes" :key="index">
            <el-sub-menu :index="item.path" v-if="item.meta?.hasSub">
                <template #title>
                    <el-icon>
                        <component :is="item.meta?.icon"></component>
                    </el-icon>
                    <span>{{item.meta?.title}}</span>
                </template>
                <el-menu-item-group v-for="(c, i) of item.children" :key="i">
                    <el-menu-item :index="c.path" @click="handleClick(c.path)">{{c.meta?.title}}</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item :index="item.path" v-else @click="handleClick(item.path)">
                <el-icon>
                    <component :is="item.meta?.icon"></component>
                </el-icon>
                <span>{{item.meta?.title}}</span>
            </el-menu-item>
        </template>

    </el-menu>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { routes, router} from '@/router';
export default defineComponent({
    name: 'AppHeader',
    setup() {
        const isCollapse = ref(true)
        const pathActive = ref('/home')
        console.log(routes)

        const handleOpen = (key: string, keyPath: string[]) => {
            // console.log('handleOpen', key, keyPath)
        }
        const handleClose = (key: string, keyPath: string[]) => {
            // console.log('handleClose', key, keyPath)
        }
        const handleClick = (path: string) => {
            pathActive.value = path
            console.log(path)
            router.push({
                path
            })
        }
        return {
            isCollapse,
            handleOpen,
            handleClose,
            routes,
            handleClick,
            pathActive
        }
    }
});






</script>
  
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
  