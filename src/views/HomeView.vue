<script setup>
import PostComponent from '../components/PostComponent.vue'
import axios from 'axios';
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const posts = reactive([]);
let page = 0;
const canLoad = ref(true);
const scrollComponent = ref(null)
const NUMBERBYLOAD = 10;

const loadPost = () => {
  axios.get(`https://dummyjson.com/posts?limit=${NUMBERBYLOAD}&skip=${page * NUMBERBYLOAD}`).then((res) => {
    if ((page * NUMBERBYLOAD) < res.data.total) {
      (res.data.posts).forEach(post => {
        axios.get(`https://dummyjson.com/users/${post.userId}?select=username,image`).then((res2) => {
          posts.push({ id: post.id, title: post.title, body: post.body, tags: post.tags, username: res2.data.username, imgurl: res2.data.image });
        });
      });
      page++;
    } else {
      canLoad.value = false;
    }
  });

}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

const handleScroll = (e) => {
  if (canLoad.value) {
    let element = scrollComponent.value
    if (element.getBoundingClientRect().bottom < window.innerHeight) {
      loadPost()
    }
  }
}

loadPost()

</script>

<template>
  <main id="main" class="d-flex flex-column align-items-center justify-content-center mx-0 ">
    <div class="mt-2 " style="display: flex; justify-content: flex-end; width: 80%;">
      <RouterLink to="/posts/new" class="btn rounded-pill btn-success border text-white">+ adicionar</RouterLink>
    </div>
    <div class="flex-col  align-items-center justify-content-center mt-2" style="width: 80%;">
      <PostComponent v-for="post in posts" :id="post.id" :titulo="post.title" :body="post.body" :tags="post.tags"
        :autor="post.username" class="border px-2 rounded mb-2" :imgurl="post.imgurl" style="width: 100%;" />

    </div>
    <div class="spinner-border text-primary my-2" v-if="canLoad" ref="scrollComponent" role="status">
      <span class="visually-hidden ">Loading...</span>
    </div>
  </main>
</template>

<style scoped>
#main {
  width: 100%;
}
</style>