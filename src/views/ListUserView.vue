<script setup>
import axios from 'axios';
import router from '@/router/index';
import { ref } from 'vue';
const users = ref([]);
axios.get("https://dummyjson.com/users").then(res => {
    (res.data.users).forEach(user => {
        users.value.push({ username: user.username, password: user.password });
    });
})
</script>

<template>
    <div id="userlist" class="d-flex justify-content-evenly">
        <button @click="()=>{router.go(-1)}" class="btn mt-4 btn-warning text-primary">back</button>
        <div id="list" class="d-flex flex-column align-items-center mt-4">
        <div v-for="user in users" class="userlist-item border rounded mb-3 p-2">
            <p>username: {{ user.username }}</p>
            <p class="mb-0">password: {{ user.password }}</p>
        </div>
    </div>
</div>
</template>

<style scoped>
#userlist {
    width: 100vw;
}

#userlist button{
    height: 100%;
}

#userlist #list{
    width: 70%;
}

.userlist-item {
    width: 300px
}
</style>