<template>
  <v-app class="app">
    <v-main>
      <ProfileContent />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import ProfileContent from '@/components/ProfileContent.vue'
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
</style>
