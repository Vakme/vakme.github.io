<template>
  <div class="profile-content">
    <v-sheet
      elevation="12"
      max-width="50%"
      rounded="lg"
      width="100%"
      class="pa-4 mx-auto mt-10"
      id="contentBox"
      >
      <div class="mx-auto text-center my-5">
        <Transition appear class="howdy" :css="false" @enter="onEnter" name="howdy">
          <div v-html="howdy" />
        </Transition>
      </div>
      <Transition class="external" :css="false" @enter="onContentEnter" name="content">
        <div ref="contentRef" v-show="animate" v-html="content" />
      </Transition>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import anime from "animejs";
import { useReadme } from "@/api/use-api.composable";
import howdy from "@/assets/howdy.svg?raw";
import {ref} from "vue";

const content = useReadme();
const animate = ref(false);
const contentRef = ref(null);

const onEnter = (el: Element, done: () => void) => {
  anime({
    targets: el.getElementsByTagName('path'),
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
  console.log(el, el.getBoundingClientRect().height + 200)
  anime({
    targets: '#contentBox',
    height: el.getBoundingClientRect().height + 200,
    easing: 'easeInOutBack',
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
</style>
