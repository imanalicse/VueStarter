import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FrontendLayout from "@/layouts/FrontendLayout.vue";
import ProductsView from "@/views/ProductsView.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import Login from "@/views/auth/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontendLayout,
      children: [
        { path: '', name: 'home', component: HomeView },
        { path: '/products', name: 'products', component: ProductsView },
      ]
    },
    {
      path: '/',
      component: AuthLayout,
      children: [
        { path: 'login', name: 'login', component: Login },
      ]
    },
  ],
})

export default router
