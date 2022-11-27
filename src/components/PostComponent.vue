<script>
export default {
  props: ["titulo", "body", "tags", "autor", "imgurl", "id"],
  components: { ComentarioComponent },
  data() {
    return { comments: reactive([]), loading: false };
  },
  methods: {
    loadComments() {
      if (this.comments.length == 0) {
        this.loading = true;
        axios(`https://dummyjson.com/posts/${this.id}/comments`).then(res => {
          this.comments = res.data.comments
          this.loading = false;
        });
      }
    }
  }
}
import ComentarioComponent from './ComentarioComponent.vue';
import axios from 'axios';
import { reactive } from 'vue';

</script>

<template>
  <div>
    <p class="fs-4 mb-0">{{ titulo }}</p>
    <div class="d-flex align-items-center mb-2">
      <img :src="imgurl" class="border rounded-circle border-dark me-1 ">
      <p class="fs-6 my-auto">{{ autor }} <span v-for="tag in tags"
          class="bg-success text-white px-2 rounded-pill mx-1">{{ tag }}</span></p>
    </div>
    <p class="fs-5 body px-3">{{ body }}</p>
    <div class="accordion accordion-flush" :id="'accordionFlushExample' + id">
      <div class="accordion-item">
        <h2 class="accordion-header" :id="'flush-headingOne' + id">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            :data-bs-target="'#flush-collapseOne' + id" aria-expanded="false" :aria-controls="'flush-collapseOne' + id"
            @click="loadComments()">
            Comentarios
          </button>
        </h2>
        <div :id="'flush-collapseOne' + id" class="accordion-collapse collapse "
          :aria-labelledby="'flush-headingOne' + id" :data-bs-parent="'#accordionFlushExample' + id">
          <div class="accordion-body d-flex justify-content-center row">
            <ComentarioComponent v-for="comment in comments" :id="comment.id" :body="comment.body"
              :autor="comment.user.username" />
            <div class="spinner-border text-primary " v-if="loading" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
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


.body {
  text-align: justify;
}
</style>