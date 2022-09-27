<template>
    <el-menu :default-active="store.pathActive" class="el-menu-vertical-demo" :collapse="store.isCollapse">
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
import { useStore } from '@/stores/store'
export default defineComponent({
    name: 'AppHeader',
    setup() {
        const store = useStore()
        const handleClick = (path: string) => {
            store.pathActive = path
            router.push({path})
        }
        return {
            store,
            routes,
            handleClick,
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
  