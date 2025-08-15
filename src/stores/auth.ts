import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: '' as string | null,
    user: null as Record<string, any> | null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.accessToken,
  },
  actions: {
    login(accessToken: string, user: object) {
      this.accessToken = accessToken;
      this.user = user
    },
    logout() {
      this.accessToken = ''
      this.user = null
    }
  }
})
