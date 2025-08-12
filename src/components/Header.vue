<script setup lang="ts">
  import {RouterLink} from "vue-router";
  interface HeaderProps {
    layout?: 'frontend' | 'auth';
    isAuthenticated?: boolean;
  }
// const props = defineProps<HeaderProps>();
const props = withDefaults(defineProps<HeaderProps>(), {
  layout: 'frontend',
  isAuthenticated: false,
});
/*const props = defineProps({
  layout: {
    type: String,
    default: 'frontend'
  },
  isAuthenticated: {
    type: Boolean,
    default: false
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
          <RouterLink to="login" class="ms-3">Log in</RouterLink>
          <RouterLink to="/register" class="ms-3">Sign-up</RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
