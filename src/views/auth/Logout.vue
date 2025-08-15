<script setup lang="ts">
  import {useAuthStore} from "@/stores/authStore.ts";
  import {useRouter} from "vue-router";

  const authStore = useAuthStore();
  const router = useRouter();
  function handleLogout() {
    authStore.logout();
    router.push({name: "login"});
  }
</script>

<template>
  <button @click="handleLogout" class="btn btn-danger">
    Logout
  </button>
</template>

<style scoped>

</style>
