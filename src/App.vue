<template>
  <v-app class="app">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :options="particles"
      class="position-relative"
    />
    <v-main class="main">
      <ProfileContent />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import ProfileContent from '@/components/ProfileContent.vue'
  import particles from '@/particles'
  import { Engine } from "tsparticles-engine";
  import { loadStarsPreset } from "tsparticles-preset-stars";
  import { ParticlesComponent as Particles } from "vue3-particles"

  console.log(particles)

  async function particlesInit(engine: Engine): Promise<void> {
    await loadStarsPreset(engine);
  }
</script>

<style>
@font-face {
  font-family:"Queensides";
  src: url("/public/Queensides-3z7Ey.ttf") format('truetype');
}
h1, h2, h3 {
  font-family: "Queensides", serif;
}
body {
  font-family: "Roboto", sans-serif;
}
.main {
  z-index: 100;
}
</style>
