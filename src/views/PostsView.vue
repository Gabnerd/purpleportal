<script setup>
import PostComponent from '../components/PostComponent.vue'
import axios from 'axios';
import { useCookies } from 'vue3-cookies';
import router from '@/router/index';
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import UserService from '../services/userService';
const userService = new UserService();
const { cookies } = useCookies();

//global variables
let page = 0;
const NUMBERBYLOAD = 10;
const user = cookies.get("user");
//reactive variables
const posts = reactive([]);
const canLoad = ref(true);
const scrollComponent = ref(null)

//load de posts on the screen
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
  <div class="bg-img">
  <nav class="navbar navbar-expand-lg bg-success">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img src="/favicon.png"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <div>
          <div class="btn-group " v-if="user">
            <button type="button" class="d-flex align-items-center btn  dropdown-toggle text-info"
              data-bs-toggle="dropdown" aria-expanded="false">
              <img :src="user.image" class="border rounded-circle border-dark me-1 user-img" />
              <p class="mb-0 ms-2 ">{{ user.username }}</p>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" @click="() => userService.logout(router)">Logout</a></li>
            </ul>
          </div>
          <div class="btn-group" v-if="!user">
            <button type="button" class="d-flex align-items-center btn  dropdown-toggle text-info"
              data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-person-circle user-img"></i>
              <p class="mb-0 text-info">Anonymous</p>
            </button>
            <ul class="dropdown-menu">
              <li>
                <RouterLink class="dropdown-item" to="/login">Login</RouterLink>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  </nav>
  <main id="main" class="d-flex flex-column align-items-center justify-content-center mx-0 ">
    <div class="mt-2 " style="display: flex; justify-content: flex-end; width: 80%;">
      <RouterLink to="/posts/new" class="btn rounded-pill btn-success border text-white">+ adicionar</RouterLink>
    </div>
    <div class="flex-col  align-items-center justify-content-center mt-2" style="width: 80%;">
      <PostComponent v-for="post in posts" :id="post.id" :titulo="post.title" :body="post.body" :tags="post.tags"
        :autor="post.username" class="border px-2 rounded mb-2 post" :imgurl="post.imgurl" style="width: 100%;" />

    </div>
    <div class="spinner-border text-purple-1 my-2" v-if="canLoad" ref="scrollComponent" role="status">
      <span class="visually-hidden ">Loading...</span>
    </div>
  </main>
</div>
</template>

<style scoped>
#main {
  width: 100%;
  background-color: #FFF4;
}

.user-img {
  width: 50px;
  font-size: 1.5rem;
}

.navbar-brand>img {
  width: 50px;
}

.bg-img{
  background-image: url("/orion-nebula-gf582318e6_1920.jpg");
  min-height: 100vh;
}

.post{
  background-color: #FFFA;
}
</style>