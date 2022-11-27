<script>
export default {
    props: ['body', 'autor']
}
</script>

<template>
    <div class="border rounded px-2 pt-2 mb-2">
        <div class="d-flex align-items-center mb-2">
            <p class="fs-6 my-auto">{{ autor }}</p>
        </div>
        <p class="fs-5 body">{{ body }}</p>
    </div>
</template>

<style scoped>
.body {
    text-align: justify;
}
</style>