<template>
  <div class="app-wrapper">
    <!-- Floating burger menu -->
    <div class="burger-anchor">
      <BurgerMenu />
    </div>

    <!-- Main content -->
    <NuxtPage />
  </div>
</template>

<script setup>
import BurgerMenu from '~/components/BurgerMenu.vue'
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  font-family: monospace;
  transition: background 0.5s ease, color 0.5s ease;
  padding: 2rem;
  position: relative;
  overflow-x: hidden;
  color: #f0f0f0;
  background: linear-gradient(135deg, #0a0a0a 0%, #d7c4f5 100%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}

.app-wrapper::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  background: inherit;
  filter: blur(16px);
}

/* Anchor the burger menu to top-right */
.burger-anchor {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
}
</style>
