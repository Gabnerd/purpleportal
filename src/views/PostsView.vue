<script setup>
import PostComponent from '../components/PostComponent.vue'
import axios from 'axios';
import { useCookies } from 'vue3-cookies';
import router from '@/router/index';
import { ref, reactive, onMounted, onUnmounted } from 'vue';
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
  <nav class="navbar navbar-expand-lg bg-success">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <div>

          <div class="btn-group " v-if="user">
            <button type="button" class="d-flex align-items-center btn  dropdown-toggle text-info" data-bs-toggle="dropdown"
              aria-expanded="false">
              <img :src="user.image" class="border rounded-circle border-dark me-1 user-img" />
              <p class="mb-0 ms-2 ">{{ user.username }}</p>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" @click="()=>{cookies.remove('user');router.go(router.currentRoute)}">Logout</a></li>
            </ul>
          </div>
          <div class="btn-group" v-if="!user">
            <button type="button" class="d-flex align-items-center btn  dropdown-toggle text-info" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i class="bi bi-person-circle user-img"></i>
              <p class="mb-0 text-info">Anonymous</p>
            </button>
            <ul class="dropdown-menu">
              <li><RouterLink class="dropdown-item" to="/login">Login</RouterLink></li>
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

.user-img {
  width: 50px;
  font-size: 1.5rem;
}
</style>