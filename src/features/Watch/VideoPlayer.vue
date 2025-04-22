<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import Hls, { Level } from "hls.js";

const videoRef = ref<HTMLVideoElement | null>(null);
const levels = ref<Level[]>([]);
const selectedLevel = ref(-1);

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});

let hls: Hls;

onMounted(() => {
  if (Hls.isSupported() && videoRef.value) {
    hls = new Hls();
    hls.loadSource(props.src);
    hls.attachMedia(videoRef.value);

    hls.on(Hls.Events.MANIFEST_PARSED, (_event, data) => {
      levels.value = data.levels;
    });

    hls.on(Hls.Events.LEVEL_SWITCHED, (_e, data) => {
      selectedLevel.value = data.level;
    });
  }
});

onBeforeUnmount(() => {
  if (hls) {
    hls.destroy();
  }
});

const changeResolution = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  if (hls && target) {
    hls.currentLevel = Number(target.value);
  }
};
</script>

<template>
  <div>
    <video
      ref="videoRef"
      controls
      width="1280"
      height="720"
      style="background: black"
    ></video>

    <div v-if="levels.length" style="margin-top: 10px">
      <label for="res-select">Rozdzielczość:</label>
      <select
        id="res-select"
        :value="selectedLevel"
        @change="changeResolution($event)"
      >
        <option :value="-1">Auto</option>
        <option v-for="(level, i) in levels" :key="i" :value="i">
          {{ level.height }}p ({{ Math.round(level.bitrate / 1000) }} kbps)
        </option>
      </select>
    </div>
  </div>
</template>
