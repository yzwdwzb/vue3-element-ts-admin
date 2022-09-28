<template>
    <div :class="login.form">
        <el-form-item>
            <el-input v-model="verify.userName" placeholder="Please input username" size="large" />
        </el-form-item>
        <el-form-item>
            <el-input v-model="verify.passWord" type="password" placeholder="Please input password" show-password
                size="large" />
        </el-form-item>
        <el-button type="primary" @click="userLogin" size="large"> 登 录 </el-button>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useStore } from '@/stores/store'
import { ElMessage } from 'element-plus'
import axios  from '@/utils/axios';
export default defineComponent({
    name: 'LoginView',
    setup() {
        const store = useStore()
        const verify = reactive({
            userName: '',
            passWord: ''
        })
        async function userLogin() {
            try {
                const res = await axios.get(`/login?userName=${verify.userName}`);
                if(JSON.stringify(res) === '[]') throw '用户名不存在'
                store.userInfo = res.data[0]
                store.routerTo('/')
            } catch (error) {
                ElMessage.error('用户名不存在')
                console.error(error)
            }
        }
        return {
            verify,
            userLogin
        }
    }
});
</script>

<style module="login">
.form {
    height: 160px;
    width: 320px;
    padding: 80px 50px 80px 50px;
    text-align: center;
    border-radius: 8px;
    position: fixed;
    box-shadow: grey 0 0 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.form:hover {
    box-shadow: grey 0 0 6px;
}
</style>
  