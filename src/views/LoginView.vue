<script setup>
import router from '@/router/index';
import axios from 'axios';
import {useCookies} from 'vue3-cookies';
import {ref} from 'vue';

const {cookies} = useCookies();


const username = ref('');
const password = ref('');

const logar = () =>{
    axios.post("https://dummyjson.com/auth/login", {username: username.value, password: password.value}, {headers: { 'Content-Type': 'application/json' }}).then((res)=>{
       cookies.set("user", res.data);
    });
}
</script>

<template>
    <div id="loginpage" class="d-flex align-items-center justify-content-center">
        <div id="form-login" class="d-flex align-items-center flex-column border rounded px-4 py-3">
            <div>
                <button class="btn p-0 mb-2" style="font-size: 1.5rem; color: rgb(98, 0, 143);"
                    @click="() => { router.go(-1) }"><i class="bi bi-arrow-left-circle-fill"></i></button>
            </div>
            <div class="form-floating mb-3">
                <input type="email" v-model="username" class="form-control" id="username" placeholder="username">
                <label for="username">Username</label>
            </div>
            <div class="form-floating mb-3">
                <div class="form-floating">
                    <input type="password" v-model="password" class="form-control" id="password" placeholder="senha">
                    <label for="password">Senha</label>
                </div>
            </div>
            <button class="btn btn-success" @click="logar()">Logar</button>
        </div>
    </div>
</template>

<style scoped>
#form-login {
    width: 30%;
}

@media (max-width: 768px) {
    #form-login {
        width: 80%;
    }
}

#loginpage {
    height: 100vh;
}

#form-login>* {
    width: 100%;
}
</style>