<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="card p-4 shadow-sm" style="max-width: 400px; width: 100%;">
      <h3 class="text-center mb-4">Login</h3>

      <form @submit.prevent="handleLogin">
        <!-- Email -->
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            id="email"
            type="email"
            v-model="form.email"
            class="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        <!-- Password -->
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            type="password"
            v-model="form.password"
            class="form-control"
            placeholder="Enter your password"
            required
          />
        </div>

        <!-- Remember Me -->
        <div class="mb-3 form-check">
          <input
            id="remember"
            type="checkbox"
            v-model="form.remember"
            class="form-check-input"
          />
          <label for="remember" class="form-check-label">Remember me</label>
        </div>

        <!-- Error -->
        <div v-if="error" class="alert alert-danger py-2">{{ error }}</div>

        <!-- Submit -->
        <button type="submit" class="btn btn-primary w-100" :disabled="loading">
          <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from "@/router";

interface LoginForm {
  email: string
  password: string
  remember: boolean
}

const form = ref<LoginForm>({
  email: '',
  password: '',
  remember: false
})

const loading = ref<boolean>(false)
const error = ref<string | null>(null)

const handleLogin = async (): Promise<void> => {
  loading.value = true
  error.value = null

  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Example: Replace with real API call
    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form.value)
    // })
    // const data = await response.json()
    // if (!response.ok) throw new Error(data.message)

    if (form.value.email === 'admin@gmail.com' && form.value.password === '123') {
      alert('Login successful!')
      // Save token and redirect
      // localStorage.setItem('token', 'fake-jwt-token')
      router.push('/me')
    }
    else {
      throw new Error('Invalid email or password')
    }
  }
  catch (err: any) {
    error.value = err.message || 'Login failed'
  }
  finally {
    loading.value = false
  }
}
</script>

<style scoped>
body {
  background-color: #f8f9fa;
}
</style>
