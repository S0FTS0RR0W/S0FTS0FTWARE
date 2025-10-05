import { ref, computed } from 'vue'

const theme = ref('dark')

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    if (process.client) {
      localStorage.setItem('theme', theme.value)
    }
  }

  if (process.client) {
    const stored = localStorage.getItem('theme')
    if (stored) theme.value = stored
  }

  return {
    theme: computed(() => theme.value),
    toggleTheme
  }
}