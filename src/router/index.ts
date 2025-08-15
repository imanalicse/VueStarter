import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FrontendLayout from "@/layouts/FrontendLayout.vue";
import ProductsView from "@/views/ProductsView.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import Login from "@/views/auth/Login.vue";
import Me from "@/views/auth/Profile.vue";
import {useAuthStore} from "@/stores/authStore.ts";
import Logout from "@/views/auth/Logout.vue";

const routes = [
  {
    path: '/',
    component: FrontendLayout,
    children: [
      { path: '', name: 'home', component: HomeView },
      { path: '/me', name: 'profile', component: Me, meta: { requiresAuth: true } },
      { path: '/products', name: 'products', component: ProductsView },
    ]
  },
  {
    path: '/',
    component: AuthLayout,
    children: [
      { path: 'login', name: 'login', component: Login },
      { path: 'logout', name: 'logout', component: Logout },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next({ name: 'login' });
  }
  // else if (store.state.user.token && (to.meta.isGuest)) {
  //   next({ name: "Dashboard" })
  // }
  else {
    next();
  }
});

export default router
