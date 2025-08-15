<script setup lang="ts">
  import {RouterLink} from "vue-router";
  import {useAuthStore} from "@/stores/authStore.ts";
  interface HeaderProps {
    layout?: 'frontend' | 'auth';
  }
// const props = defineProps<HeaderProps>();
const props = withDefaults(defineProps<HeaderProps>(), {
  layout: 'frontend'
});

  const authStore = useAuthStore();
  console.log('header_isLoggedIn', authStore.isLoggedIn);
  const isLoggedIn = authStore.isLoggedIn;
/*const props = defineProps({
  layout: {
    type: String,
    default: 'frontend'
  }
});*/
console.log('props', props);
</script>

<template>
  <header class="p-3 mb-3 border-bottom sticky-top">
    <div class="container">
      <div class="d-flex">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" height="50" />
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/products">Products</RouterLink>
        </nav>
        <div class="text-end ms-auto">
          <RouterLink to="/checkout" class="ms-3">Checkout</RouterLink>
          <RouterLink v-if="!isLoggedIn" to="login" class="ms-3">Log in</RouterLink>
          <RouterLink v-if="isLoggedIn" to="logout" class="ms-3">Log out</RouterLink>
          <RouterLink v-if="!isLoggedIn" to="/register" class="ms-3">Sign-up</RouterLink>
          <RouterLink to="/me" class="ms-3">Profile</RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
