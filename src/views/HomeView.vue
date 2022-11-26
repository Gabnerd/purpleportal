<script setup>
import PostComponent from '../components/PostComponent.vue'
import axios from 'axios';
import {ref, reactive, onMounted} from 'vue';

const posts = reactive([]);


axios.get("https://dummyjson.com/posts").then((res)=>{
  (res.data.posts).forEach(post => {
    axios.get(`https://dummyjson.com/users/${post.userId}?select=username,image`).then((res2)=>{
      posts.push({id: post.id ,title: post.title, body: post.body, tags: post.tags, username: res2.data.username, imgurl: res2.data.image});
    });
    });
});

</script>

<template>
  <main class="row align-items-center justify-content-center mx-0">
    <div class="mt-2" style="display: flex; justify-content: flex-end; width: 80%;">
      <button>+</button>
    </div>
    <div class="flex-col align-items-center justify-content-center mt-2" style="width: 80%;">
    <PostComponent v-for="post in posts" :id="post.id" :titulo="post.title" :body="post.body" :tags="post.tags" :autor="post.username" class="border px-2 rounded mb-2" :imgurl="post.imgurl" style="width: 100%;"/>
   
  </div>
  </main>
</template>
