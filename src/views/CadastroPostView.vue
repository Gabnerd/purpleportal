<script setup>
    import {ref} from 'vue';
</script>

<template>
    <div id="cadpage" class="d-flex align-items-center justify-content-center">
        <div id="form-cad-post" class="d-flex align-items-center flex-column border rounded px-4 py-3">
            <div>
                <button class="btn" style="font-size: 1.5rem; color: rgb(98, 0, 143);"><i class="bi bi-arrow-left-circle-fill"></i></button>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="titulo">
                <label for="floatingInput">Titulo</label>
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="digitar o conteudo" id="floatingTextarea2"
                    style="height: 200px"></textarea>
                <label for="floatingTextarea2">Conteudo...</label>
            </div>
            <button class="btn btn-success">Cadastrar</button>
        </div>
    </div>
</template>

<style scoped>
#form-cad-post {
    width: 60%;
}

#cadpage {
    height: 100vh;
}

#form-cad-post > *{
    width: 100%;
}
</style>