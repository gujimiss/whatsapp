import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// import { loginApi, getUserInfo } from '@/api/auth'

interface UserInfo {
  name: string
  email: string
}

export const useAuthStore = defineStore(
  'auth',
  () => {
    // State (使用 ref 替代 reactive 保持结构一致性)
    const token = ref<string | null>('')
    const userInfo = ref<UserInfo | null>(null)

    // Getters
    const isAuthenticated = computed(() => !!token.value)
    const username = computed(() => userInfo.value?.name || 'Guest')

    // Actions
    const setToken = (newToken: string) => {
      token.value = newToken
    }

    const clearAuth = () => {
      token.value = null
      userInfo.value = null
      localStorage.removeItem('token')
    }

    // const login = async (payload: LoginPayload) => {
    //   try {
    //     const { token: authToken } = await loginApi(payload)
    //     setToken(authToken)
    //     await fetchUserInfo()
    //   } catch (error) {
    //     clearAuth()
    //     throw error
    //   }
    // }

    // const fetchUserInfo = async () => {
    //   if (!token.value) return
    //   userInfo.value = await getUserInfo()
    // }

    return {
      // State
      token,
      userInfo,

      // Getters
      isAuthenticated,
      username,

      // Actions
      setToken,
      // login,
      logout: clearAuth,
      // fetchUserInfo,
    }
  },
  {
    persist: [
      {
        pick: ['token'],
        storage: localStorage,
      },
    ],
  }
)
