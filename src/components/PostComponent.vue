<script>
export default {
    props: ["titulo", "body", "tags", "autor", "imgurl", "id"],
    components: { ComentarioComponent },
    data(){
        return {comments: reactive([])};
    },
    methods:{
        loadComments(){
            axios(`https://dummyjson.com/posts/${this.id}/comments`).then(res=>{
    (res.data.comments).forEach(comment => {
      this.comments.push({id: comment.id , body: comment.body, username: comment.user.username});
    });
});
        }
    },
    mounted(){
        this.loadComments();
    }
}
import ComentarioComponent from './ComentarioComponent.vue';
import axios from 'axios';
import {reactive, defineProps} from 'vue';

</script>

<template>
    <div>
        <p class="fs-4 mb-0">{{ titulo }}</p>
        <div class="d-flex align-items-center mb-2">
            <img :src="imgurl" class="border rounded-circle border-dark me-1 ">
            <p class="fs-6 my-auto">{{ autor }} <span v-for="tag in tags" class="bg-success text-white px-2 rounded-pill mx-1">{{ tag }}</span></p>
        </div>
        <p class="fs-5 body px-3">{{ body }}</p>
        <div class="accordion accordion-flush" :id="'accordionFlushExample'+id">
  <div class="accordion-item">
    <h2 class="accordion-header" :id="'flush-headingOne'+id">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapseOne'+id" aria-expanded="false" :aria-controls="'flush-collapseOne'+id">
        Comentarios
      </button>
    </h2>
    <div :id="'flush-collapseOne'+id" class="accordion-collapse collapse" :aria-labelledby="'flush-headingOne'+id" :data-bs-parent="'#accordionFlushExample'+id">
      <div class="accordion-body">
        <ComentarioComponent v-for="comment in comments" :id="comment.id" :body="comment.body" :autor="comment.username"/>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<style scoped>
img {
    width: 30px;
}
.body{
    text-align: justify;
}
</style>