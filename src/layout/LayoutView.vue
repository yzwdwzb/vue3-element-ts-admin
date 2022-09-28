<template>
    <el-container class="contanier_box">
        <!-- 头部 -->
        <el-header>
            <app-header />
        </el-header>
        <!-- 头部下面的内容 -->
        <el-container class="contanier_box">
            <!-- 侧边栏 -->
            <el-aside class="sliber_box">
                <app-sliber />
            </el-aside>
            <!-- 主要内容 -->
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/layout/components/AppHeader.vue'
import AppSliber from '@/layout/components/AppSliber.vue'
export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'LayoutView',
    components: {
        AppHeader, AppSliber
    },

});
</script>

<style scoped>
    .sliber_box{
        width: auto;
    }
</style>
  