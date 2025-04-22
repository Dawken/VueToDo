<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import type Player from "video.js/dist/types/player";

const props = defineProps({
  src: String,
  type: {
    type: String,
    default: "video/mp4",
  },
  options: {
    type: Object,
    default: () => ({}),
  },
});

const videoRef = ref<HTMLVideoElement | null>(null);
let player: Player | null = null;

onMounted(() => {
  if (videoRef.value) {
    player = videojs(videoRef.value, props.options || {});
  }
});

onBeforeUnmount(() => {
  if (player) {
    player.dispose();
  }
});
</script>

<template>
  <div>
    <video
      ref="videoRef"
      class="video-js vjs-default-skin"
      controls
      preload="auto"
      width="640"
      height="360"
      muted
    >
      <source :src="src" :type="type" />
    </video>
  </div>
</template>
