<script>
export default {
  props: ["titulo", "body", "tags", "autor", "imgurl", "id"],
  components: { ComentarioComponent },
  data() {
    return { comments: reactive([]), loading: false, levecommode: false, newcom: ref('') };
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
    },
    enterCommentMode() {
      this.levecommode = true;
    },
    sendCommentario(){
      this.levecommode = false;
      this.comments.push({body: this.newcom, user: {username: "anonymous"}});
      this.newcom = "";
    }
  }
}
import ComentarioComponent from './ComentarioComponent.vue';
import axios from 'axios';
import { reactive, ref } from 'vue';

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
            <ComentarioComponent v-for="comment in comments" :body="comment.body"
              :autor="comment.user.username" />
            <div class="d-flex row">
              <button type="button" class="btn btn-outline-secondary" @click="enterCommentMode()"
                v-if="!levecommode">Adicionar comentario</button>
                <div class="d-flex" v-if="levecommode">
                  <div class="form-floating form-comentario ">
  <input class="form-control" id="floatingInput" v-model="newcom" placeholder="muito legal a publicação">
  <label for="floatingInput">Comentario</label>
</div>
          
              <button class="btn btn-success btn-send" type="button" @click="sendCommentario()">Enviar <i class="bi bi-send-fill"></i></button>
            </div>
            </div>
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

.form-comentario{
  width: 85%;
}

.btn-send{
  width: 15%;
}

.body {
  text-align: justify;
}
</style>