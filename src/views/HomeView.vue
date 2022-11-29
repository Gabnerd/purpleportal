<script setup>
import PostComponent from '../components/PostComponent.vue'
import axios from 'axios';
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const posts = reactive([]);
let page = 0;
const canLoad = ref(true);
const scrollComponent = ref(null)
const NUMBERBYLOAD = 10;

const loadPost = (e) => {
  axios.get(`https://dummyjson.com/posts?limit=${NUMBERBYLOAD}&skip=${page * NUMBERBYLOAD}`).then((res) => {
    console.log(page + " - " + res.data.skip);
    if ((page*NUMBERBYLOAD) < res.data.total) {
      (res.data.posts).forEach(post => {
        axios.get(`https://dummyjson.com/users/${post.userId}?select=username,image`).then((res2) => {
          posts.push({ id: post.id, title: post.title, body: post.body, tags: post.tags, username: res2.data.username, imgurl: res2.data.image });
        });
      });
      page++;
    }else{
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
  let element = scrollComponent.value
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    loadPost()
  }
}

loadPost()

</script>

<template>
  <main class="row align-items-center justify-content-center mx-0">
    <div class="mt-2" style="display: flex; justify-content: flex-end; width: 80%;">
      <button class="btn rounded-pill btn-success border text-white">+ adicionar</button>
    </div>
    <div class="flex-col align-items-center justify-content-center mt-2" style="width: 80%;" ref="scrollComponent">
      <PostComponent v-for="post in posts" :id="post.id" :titulo="post.title" :body="post.body" :tags="post.tags"
        :autor="post.username" class="border px-2 rounded mb-2" :imgurl="post.imgurl" style="width: 100%;" />

    </div>
    <p v-if="canLoad">Loading new data...</p>
  </main>
</template>
