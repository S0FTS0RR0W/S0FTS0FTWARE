<template>
  <div class="burger-menu-root" ref="menuRoot">
    <button
      @click="toggleMenu"
      class="burger-btn"
      aria-label="Toggle menu"
      :aria-expanded="isOpen"
      aria-controls="burger-menu-list"
    >
      <Icon
        :icon="isOpen ? 'line-md:menu-to-close-transition' : 'line-md:close-to-menu-transition'"
        :key="isOpen ? 'menu-open' : 'menu-closed'"
        width="32"
        height="32"
      />
    </button>

    <transition name="fade">
      <div
        v-if="isOpen"
        id="burger-menu-list"
        class="menu-panel"
        tabindex="-1"
      >
        <ul class="space-y-3 text-base">
          <li><a href="/" class="menu-link">Home</a></li>
          <li><a href="/modules" class="menu-link">Modules</a></li>
          <li><a href="/rituals" class="menu-link">Rituals</a></li>
          <li><a href="/about" class="menu-link">About</a></li>
          <li><a href="/downloads" class="menu-link">Downloads</a></li>
          <li><a href="/homer" class="menu-link">HomeR?!?</a></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'

const isOpen = ref(false)
const menuRoot = ref(null)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const handleClickOutside = (event) => {
  if (menuRoot.value && !menuRoot.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<style scoped>
.burger-menu-root {
  position: relative;
  display: inline-block;
}

.burger-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 9999px;
  padding: 0.5rem;
  transition: box-shadow 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #f0f0f0;
}
.burger-btn:hover {
  box-shadow: 0 0 0 2px #c37aff;
}

.menu-panel {
  position: absolute;
  top: 2.5rem;
  right: 0;
  width: 12rem;
  padding: 1rem;
  border-radius: 1rem;
  z-index: 40;

  background: linear-gradient(135deg, #0a0a0a 0%, #d7c4f5 100%);
  color: #f0f0f0;
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.menu-link {
  display: inline-block;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-family: monospace;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: #f0f0f0;
  position: relative;
  background: transparent;
  transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease;
}
.menu-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0.2rem;
  width: 0%;
  height: 2px;
  background: #e799ff98;
  transition: width 0.4s ease;
}
.menu-link:hover::after {
  width: 100%;
}
.menu-link:focus {
  outline: none;
  box-shadow: 0 0 0 2px #ffffff3d;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>