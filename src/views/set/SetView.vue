<template>
    <div class="home">
      set
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router'
  export default defineComponent({
    name: 'SetView',
    setup(){
      const route = useRoute()
      console.log(route)
    }
  });
  </script>
  