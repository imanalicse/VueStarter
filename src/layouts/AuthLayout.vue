<script setup lang="ts">

import Header from "@/components/Header.vue";
</script>

<template>
  <Header :layout="'auth'" />
  <div class="auth-container">
    <router-view />
  </div>
</template>


<style scoped>

</style>
