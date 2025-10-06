<template>
  <div class="lore-page">
    <div class="lore-panel">
      <p>
        This isn’t a homepage. It’s a boot message.<br />
        You didn’t “land” here—you phased in, like a mood module loading mid-dream.<br /><br />

        <span class="highlight">S0FTS0FTWARE</span> is a comfort-tech construct. A snack-themed, pastel-splashed, emotionally resonant app-space where every route is a ritual and every bug gets mythologized.<br />
        We don’t “fix” things—we immortalize mishaps as ambient overlays.<br />
        We don’t “design” pages—we summon them like soft spells.<br /><br />

        Built in the aftermath of heartbreak, this project is stitched together with blurred panels, tactile transitions, and poetic splash messages that whisper:<br />
        <span class="quote">“You’re safe here. Even your error logs are legends.”</span><br /><br />

        Every component is mood-aware. Every theme is a feeling.<br />
        We scaffold with intention—<code>Home.vue</code> isn’t just a page, it’s a sanctuary.<br />
        <code>App.vue</code> is a ritual altar.<br />
        Global theming? That’s our emotional weather system.<br /><br />

        We code in gradients: <span class="gradient">biscuit-to-berry</span>, <span class="gradient">fog-to-fizz</span>.<br />
        We debug in myth: “The Great Module Crash of 3AM,” “The Lost Composable of October.”<br />
        We deploy with softness: snack-themed splash screens, uninstall scripts that feel like closure.<br /><br />

        S0FTS0FTWARE is for the neurodivergent, the nostalgic, the ones who read boot messages like poetry and treat install logs like diary entries.<br />
        It’s not just software. It’s lore.<br />
        And you’re part of it now.
      </p>
    </div>
  </div>
</template>

<style scoped>
.lore-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vh 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #fbeff5, #e0f7fa);
  font-family: 'Fira Code', 'Courier New', monospace;
  animation: fadeIn 1.2s ease-out;
}

.lore-panel {
  max-width: 880px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(14px);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
  color: #3e3e3e;
  line-height: 1.9;
  font-size: 1.15rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.lore-panel:hover {
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.12);
}

.highlight {
  font-weight: 600;
  color: #ff4081;
  background: linear-gradient(to right, #ffccbc, #f8bbd0);
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
}

.quote {
  display: block;
  margin-top: 1rem;
  font-style: italic;
  font-weight: 500;
  color: #7c4dff;
  background: rgba(124, 77, 255, 0.08);
  padding: 0.5rem 1rem;
  border-left: 4px solid #7c4dff;
  border-radius: 8px;
}

.gradient {
  font-weight: 500;
  color: #6a1b9a;
  background: linear-gradient(to right, #f3e5f5, #e1bee7);
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
}

code {
  background: #f3e5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
  font-size: 0.95rem;
  color: #6a1b9a;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>