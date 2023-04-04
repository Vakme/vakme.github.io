<template>
  <div class="profile-content">
    <v-sheet
      elevation="12"
      rounded="lg"
      :width="mdAndDown ? '100%': '50%'"
      height="250"
      class="pa-4 mx-sm-auto my-10"
      id="contentBox"
      >
      <div ref="headerRef" class="mx-5 my-5">
        <Transition appear class="howdy" :css="false" @enter="onEnter" name="howdy">
          <div v-html="howdy" :class="{scaledHeader: mdAndDown}" />
        </Transition>
      </div>
      <Transition class="external" :css="false" @enter="onContentEnter" name="content">
        <div v-show="animate" v-html="content" />
      </Transition>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import anime from "animejs";
import { useReadme } from "@/api/use-api.composable";
import howdy from "@/assets/test.svg?raw";
import {ref} from "vue";
import { useDisplay } from "vuetify";

const { mdAndDown } = useDisplay();

const content = useReadme();
const animate = ref(false);
const headerRef = ref<Element>();

const onEnter = (el: Element, done: () => void) => {
  console.log(el)
  anime({
    targets: el.getElementsByTagName('svg')[0].children,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutBack',
    duration: 2000,
    delay: function(el, i) { return i * 250 },
    direction: 'normal',
    complete: () => {
      done();
      animate.value = true;
    },
  });
}

const onContentEnter = (el: Element, done: () => void) => {
  anime({
    targets: '#contentBox',
    height: el.getBoundingClientRect().height + 75 + (headerRef.value?.getBoundingClientRect().height ?? 0),
    easing: 'easeInOutSine',
    duration: 2000,
    direction: 'normal',
  });
  anime({
    targets: el.children,
    opacity: [0, 1],
    easing: 'easeInOutBack',
    duration: 2000,
    direction: 'normal',
    delay: function(el, i) { return i * 250 },
    complete: done,
  });
}


</script>

<style lang="scss">
@import "external";

.scaledHeader {
  transform: scale(50%) translateX(-150px);
}
</style>
