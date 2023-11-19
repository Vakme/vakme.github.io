<template>
<div class="d-flex footer justify-center align-center w-100">
  <Decorator />
  <h4 class="text-uppercase footer-title">{{ $t('FOOTER.TITLE') }}</h4>
</div>
</template>

<script setup lang="ts">
import Decorator from "@/components/Decorator.vue";
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 10vh;
  padding-left: 5vw;
  padding-right: 5vw;
}
.footer-title {
  font-size: 2rem;
  font-family: "Roboto Mono", sans-serif;
}
</style>
