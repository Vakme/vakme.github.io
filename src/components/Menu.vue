<template>
<div class="d-flex menu justify-center align-center w-100">

  <v-btn-toggle
    rounded="0"
    v-model="menuItem"
    class="w-100"
  >
    <v-btn
      class="menu-buttons flex-grow-1 home-button"
      :value="WINDOW_VIEWS.HOME"
      variant="flat">
      {{ $t('MENU.HOME') }}
    </v-btn>
    <v-btn
      class="menu-buttons"
      selected-class="selected-buttons"
      v-for="(value, key) in menuObject"
      :value="key"
      :key="key"
      variant="text">
      {{ $t(value) }}
    </v-btn>
  </v-btn-toggle>
  <Decorator reversed />
</div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import Decorator from "@/components/Decorator.vue";
import { WINDOW_VIEWS } from "@/types/window.enum";
import { useLocale } from 'vuetify'

const { t } = useLocale()

const menuObject = {
  [WINDOW_VIEWS.ABOUT]: t('MENU.ABOUT_ME'),
  [WINDOW_VIEWS.EXPERIENCE]: t('MENU.EXPERIENCE'),
  [WINDOW_VIEWS.PROJECTS]: t('MENU.PROJECTS'),
  [WINDOW_VIEWS.CONTACT]: t('MENU.CONTACT')
};

const props = defineProps<{
  window: WINDOW_VIEWS;
}>();

const emit = defineEmits<{
  (e: 'update:window', value: WINDOW_VIEWS): void
}>();

const menuItem = ref(props.window);

watch(menuItem, (value: WINDOW_VIEWS) => {
  emit('update:window', value);
})

</script>

<style scoped>
.menu {
  position: fixed;
  left: 0;
  top: 10vh;
  padding-left: 5vw;
  padding-right: 5vw;
  z-index: 100;
}
.menu-buttons {
  font-size: 2rem;
  font-family: "Roboto Mono", sans-serif;
  background-color: transparent;
}
.home-button {
  background-color: #38b6ff;
  color: #000000;
}
.selected-buttons {
 background-color: transparent;
  color: #38b6ff;
}
</style>
