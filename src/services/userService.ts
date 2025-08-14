// Example: Login request
import ApiService from '@/services/api'

interface LoginResponse {
  token: string
  user: { id: number; name: string; email: string }
}

export const loginUser = async (email: string, password: string) => {
  const res = await ApiService.post<LoginResponse>('/auth/login', { email, password })
  return res.data
}

// Example: Fetch users
export const getUsers = async () => {
  const res = await ApiService.get('/users')
  return res.data
}
