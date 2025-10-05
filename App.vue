<template>
  <div class="app-wrapper">
    <NuxtPage />
  </div>
</template>

<script setup>
// No theme logic needed
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  transition: background 0.5s ease, color 0.5s ease;
  padding: 2rem;
  position: relative;
  overflow-x: hidden;
  color: #f0f0f0;
  background: linear-gradient(135deg, #0a0a0a 0%, #d7c4f5 100%);
  /* Blurred effect */
  /* If you want blur on the background itself, use a pseudo-element: */
}

.app-wrapper::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  background: inherit;
  filter: blur(16px);
}
</style>