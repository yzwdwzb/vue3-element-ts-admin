<template>
    <div class="box" :style="{'background-color':item.color}">
        <div>
            <div class="describe">{{item.describe}}</div>
            <div class="number">{{item.number}} <span class="unit">({{item.unit}})</span></div>
        </div>
        <div class="icon">
            <el-icon>
                <component :is="item.icon"></component>
            </el-icon>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'AutoBox',
    props: ['item']
  });
  </script>

  <style scoped>
    .box {
        background-color: #007acc;
        box-shadow: initial;
        border-radius: 4px;
        min-width: 190px;
        min-height: 80px;
        display: grid;
        grid-template-columns: 64% 34%;
        grid-gap: 2%;
        margin: 2px 20px 2px 20px;
    }
    .box:hover{
        box-shadow:  0 0 2px;
    }

    .describe,
    .number,
    .unit{
        color: #ffffff;
        font-weight: bold;
    }

    .describe{
        padding: 10px 0 10px 6px;
    }

    .number{
        padding: 0px 2px 10px 6px;
        font-size: 24px;
    }
    .unit {
        font-size: 12px;
    }
    
    .icon {
        color: #ffffff;
        font-size: 32px;
        text-align: center;
    }
    .icon .el-icon{
        top: 50%;
        transform:translateY(-50%);
    }
  </style>
  