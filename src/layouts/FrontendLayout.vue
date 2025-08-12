<script setup lang="ts">

import Header from "@/components/Header.vue";
</script>

<template>
  <div>
    <Header :layout="'frontend'" />
    <nav>Frontend Navbar</nav>
    <router-view />
    <footer>Frontend Footer</footer>
  </div>
</template>


<style scoped>

</style>
