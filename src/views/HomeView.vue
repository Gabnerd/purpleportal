<script setup>

</script>

<template>
    <div id="home" class="d-flex align-items-center justify-content-center">
        <div class="d-flex flex-column button-containner p-2 py-4 rounded">
            <img src="/purple_portal.png" class="mx-auto" alt="">
            <div class="d-flex justify-content-around">
            <RouterLink class="portal-link px-2 mx-4 rounded display-5" to="/posts">Publicações</RouterLink>
            <RouterLink class="portal-link px-2 mx-4 rounded display-5" to="/posts/new">Nova Publicação</RouterLink>
        </div>
        </div>
    </div>
</template>

<style scoped>
#home {
    background-image: url("/orion-nebula-gf582318e6_1920.jpg");
    width: 100vw;
    height: 100vh;
}

.button-containner{
    background-color: #FFFA;
    width: 60vw;
}

.portal-link{
    background-color: var(--secondary);
    color: var(--purple-1) !important;
    text-decoration: none;
}
</style>