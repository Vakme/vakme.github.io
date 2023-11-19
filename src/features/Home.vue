<template>
      <div class="h-screen w-auto home">
        <div class="d-flex flex-column align-start justify-start home-content">
            <Transition appear class="howdy" :css="false" @enter="onEnter" name="howdy">
              <div v-html="howdy" />
            </Transition>
          <Transition :css="false" @enter="onContentEnter" name="content">
            <div v-show="animate">
              <div class="mt-8 mb-12 px-4 title">{{$t('HOME.TITLE')}}</div>
              <div class="my-8 content">{{$t('HOME.CONTENT')}}</div>
            </div>
          </Transition>
        </div>
        <img class="me" alt="me" :src="mePng" />
      </div>
</template>

<script setup lang="ts">
import anime from "animejs";
import howdy from "@/assets/howdy.svg?raw";
import {ref} from "vue";
import mePng from "@/assets/me.png"

const animate = ref(false);


const onEnter = (el: Element, done: () => void) => {
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

<style scoped>
.home {
  background-image: url(/bg-home.png);
  background-size: cover;
}
.home-content {
  position: relative;
  top: 40vh;
  left: 10vw;
  width: 40vw;
  font-size: 2rem;
  height: 60vh;
}
.title {
  font-family: "Roboto Mono", sans-serif;
  background-color: #38b6ff;
  color: #000000;
  width: fit-content;
}
.me {
  position: absolute;
  bottom: 0;
  right: 10vw;
  height: 80vh;
}
.content {
  white-space: pre-line
}
</style>
