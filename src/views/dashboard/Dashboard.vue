<template>
  <div>
    <div :class="panel['auto-boxs']">
      <auto-box v-for="i in boxList" :item="i"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue';
import AutoBox from '@/components/AutoBox.vue';
import axios from '@/utils/axios';
import { ElMessage } from 'element-plus'
export default defineComponent({
  name: 'Dashboard',
  components: {
    AutoBox
  },
  setup() {
    const boxList = ref([])
    async function pageInit() {
      try {
        const res = await axios.get(`/showcase`);
        if (JSON.stringify(res.data) === '{}') throw '数据不存在'
        boxList.value = res.data.topBoxList
      } catch (error) {
        ElMessage.error('数据不存在')
        console.error(error)
      }
    }
    pageInit()
    return {
      boxList
    }
  }
});
</script>

<style module="panel">
.auto-boxs {
  width: 100%;
  /* display: flex; */

  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

@media screen and (max-width: 1000px) {
  .auto-boxs {
    width: 100%;
    /* display: flex; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
