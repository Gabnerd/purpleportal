<script setup>
    import {ref} from 'vue';
    import router from '@/router/index';
    import {useCookies} from 'vue3-cookies';
    const {cookies} = useCookies();
   
    const user = cookies.get("user");
    const titulo = ref('');
    const conteudo = ref('');
    const msg = ref('');

    const cadastrar = () =>{
        titulo.value = '';
        conteudo.value = '';
        msg.value = 'Postagem cadastrada com sucesso!\nobs: Apenas cadastro ficticio.';
    }
</script>

<template>
    <div id="cadpage" class="d-flex align-items-center justify-content-center">
        <div id="form-cad-post" class="d-flex align-items-center flex-column border rounded px-4 py-3 bg-white">
            <div>
                <button class="btn p-0 mb-2" style="font-size: 1.5rem; color: rgb(98, 0, 143);" @click="()=>{router.go(-1)}"><i class="bi bi-arrow-left-circle-fill"></i></button>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="titulo" v-model="titulo" placeholder="titulo">
                <label for="titulo" >Titulo</label>
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="digitar o conteudo" id="conteudo"
                    style="height: 200px" v-model="conteudo"></textarea>
                <label for="conteudo">Conteudo</label>
            </div>
            <button class="btn btn-success" v-if="user" @click="cadastrar()">Cadastrar</button>
            <div class="mt-2 rounded bg-secondary px-2" v-if="msg">
                <p class="text-warning">{{msg}}</p>
            </div>
            <RouterLink class="btn btn-danger" v-if="!user" to="/login">Necessario Login para faz post</RouterLink>
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
    background-image: url("/orion-nebula-gf582318e6_1920.jpg");
}

#form-cad-post > *{
    width: 100%;
}
</style>