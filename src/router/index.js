import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import("@/views/PostsView.vue")
    },
    {
      path: '/posts/new',
      name: 'cadastroPost',
      component: () => import('@/views/CadastroPostView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/userslist',
      name: 'userslist',
      component: () => import('@/views/ListUserView.vue')
    }
    //{
      //path: '/about',
      //name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    //}
  ]
})

export default router
