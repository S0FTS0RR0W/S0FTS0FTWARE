<template>
  <div :class="['splash', theme]">
    <div class="panel">
      <h1>S0FTS0FTWARE</h1>
      <p>Ambient tools for tender minds. Rituals in code. Comfort in every keystroke.</p>
      <NuxtLink to="/home" class="begin-btn">Begin.</NuxtLink>
    </div>
  </div>
</template>

<script setup>
//import { theme } from '~/composables/useTheme'
</script>

<style scoped>
.splash {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: monospace;
  transition: background 0.4s ease, color 0.4s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Dark theme background */
.splash.dark {
  background-image: url('/images/bg-dark.jpg'); /* Replace with your actual path */
  color: white;
}

/* Light theme background */
.splash.light {
  background-image: url('/images/bg-light.jpg'); /* Replace with your actual path */
  color: #222;
}

.panel {
  backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.25rem;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  max-width: 600px;
  width: 100%;
  transition: box-shadow 0.3s ease;
}

.panel h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.panel p {
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.begin-btn {
  display: inline-block;
  padding: 0.6rem 1.6rem;
  background-color: #d7c4f5;
  color: #222;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  box-shadow: 0 0 12px rgba(215, 196, 245, 0.4);
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}

.begin-btn:hover {
  background-color: #c2a8f0;
  transform: scale(1.05);
  box-shadow: 0 0 16px rgba(215, 196, 245, 0.6);
}

.begin-btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(215, 196, 245, 0.5);
}
</style>
