<template>
  <div class="d-flex w-100 justify-center align-center" :class="[{'flex-row-reverse': reversed}, reversed ? 'ml-8' : 'mr-8']">
    <span class="circle" />
    <span class="line" />
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    reversed?: boolean;
  }>();

</script>

<style scoped>
.circle {
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  border: 4px solid #ffffff;
}
.line {
  height: 3px;
  border: 3px solid #ffffff;
  width: 100%;
}
</style>
