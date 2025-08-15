<script setup lang="ts">
  import {useAuthStore} from "@/stores/authStore.ts";
  import {useRouter} from "vue-router";
  import {onMounted} from "vue";

  const authStore = useAuthStore();
  const router = useRouter();
  function handleLogout() {
    authStore.logout();
    router.push({name: "login"});
  }
  onMounted(async () => {
    handleLogout()
  })
</script>

<template>
  <button @click="handleLogout" class="btn btn-danger">
    Logout
  </button>
</template>

<style scoped>

</style>
