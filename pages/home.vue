<template>
  <div :class="['home-wrapper', theme]">
    <section class="intro-panel">
      <h1>S0FTS0FTWARE</h1>
      <p>Welcome home, where rituals begin and modules breathe.</p>
    </section>

    <section class="grid">
      <NuxtLink to="/modules" class="module-card">
        <Icon icon="material-symbols:blur-linear-outline-rounded" class="card-icon" />
        <h2>Modules</h2>
        <p>Snack-themed tools for ambient workflows.</p>
      </NuxtLink>

      <NuxtLink to="/lore" class="module-card">
        <Icon icon="material-symbols:menu-book-outline-rounded" class="card-icon" />
        <h2>Lore</h2>
        <p>How this started and where the inspiration came from.</p>
      </NuxtLink>

      <NuxtLink to="/echoes" class="module-card">
        <Icon icon="ph:waveform-light" class="card-icon" />
        <h2>Echoes</h2>
        <p>Journaling overlays and emotional feedback loops.</p>
      </NuxtLink>
    </section>
  </div>
</template>

<script setup>
//import { theme } from '~/composables/useTheme'
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.home-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: monospace;
  transition: background 0.4s ease, color 0.4s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.home-wrapper.dark {
  background-image: url('/images/bg-dark.jpg');
  color: white;
}

.home-wrapper.light {
  background-image: url('/images/bg-light.jpg');
  color: #222;
}

.intro-panel {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.intro-panel h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 960px;
}

.module-card {
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: block;
}

.module-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.12);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

.module-card:hover .card-icon {
  transform: scale(1.1);
}
</style>
