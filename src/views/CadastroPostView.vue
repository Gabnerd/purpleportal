<script setup>
    import {ref} from 'vue';
    import router from '@/router/index';
    import {useCookies} from 'vue3-cookies';
    const {cookies} = useCookies();
   
    const user = cookies.get("user");
</script>

<template>
    <div id="cadpage" class="d-flex align-items-center justify-content-center">
        <div id="form-cad-post" class="d-flex align-items-center flex-column border rounded px-4 py-3">
            <div>
                <button class="btn p-0 mb-2" style="font-size: 1.5rem; color: rgb(98, 0, 143);" @click="()=>{router.go(-1)}"><i class="bi bi-arrow-left-circle-fill"></i></button>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="titulo" placeholder="titulo">
                <label for="titulo">Titulo</label>
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="digitar o conteudo" id="conteudo"
                    style="height: 200px"></textarea>
                <label for="conteudo">Conteudo</label>
            </div>
            <button class="btn btn-success" v-if="user">Cadastrar</button>
            <button class="btn btn-danger" v-if="!user">Necessario Login para faz post</button>
        </div>
    </div>
</template>

<style scoped>
#form-cad-post {
    width: 30%;
}

@media (max-width: 768px) {
    #form-cad-post {
    width: 80%;
}
}

#cadpage {
    height: 100vh;
}

#form-cad-post > *{
    width: 100%;
}
</style>