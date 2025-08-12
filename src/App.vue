<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
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
          <RouterLink to="/login" class="ms-3">Log in</RouterLink>
          <RouterLink to="/register" class="ms-3">Sign-up</RouterLink>
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header nav a {
  padding: 0 10px;
}
</style>
