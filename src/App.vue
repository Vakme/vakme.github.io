<template>
  <v-app class="app">
    <v-main class="main">
      <Menu v-model:window="window" />
      <v-window
        v-model="window"
      >
        <v-window-item
          :value="WINDOW_VIEWS.HOME"
        >
          <Home />
        </v-window-item>
        <v-window-item
          :value="WINDOW_VIEWS.ABOUT"
        >
          About
        </v-window-item>
      </v-window>
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import { WINDOW_VIEWS } from "@/types/window.enum";
  import Home from "@/features/Home.vue";
  import Footer from "@/components/Footer.vue";
  import Menu from "@/components/Menu.vue";
  import {ref} from "vue";

  const window = ref(WINDOW_VIEWS.HOME);
</script>

<style>
html {
  overflow: auto !important;
}
@font-face {
  font-family:"Queensides";
  src: url("/Queensides-3z7Ey.ttf") format('truetype');
}
h1, h2, h3 {
  font-family: "Queensides", serif;
}
h4 {
  font-family: "Roboto Mono", sans-serif;
}
body {
  font-family: "Roboto", sans-serif;
}
.main {
  background-color: #000000;
  background-image: url(/bg.png);
  background-size: cover;
}
</style>
