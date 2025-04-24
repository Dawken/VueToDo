<script setup lang="ts">
import { onMounted, ref, watch, onUnmounted } from "vue";
import { MediaPlayer, type Bitrate, type MediaPlayerClass } from "dashjs";

const videoRef = ref<HTMLVideoElement | null>(null);
const player = ref<MediaPlayerClass | null>(null);
const bitrates = ref<Bitrate[]>([]);
const selectedQuality = ref<number>(0);

const { src } = defineProps<{ src: string }>();

const initializePlayer = () => {
  if (!videoRef.value) return;

  player.value = MediaPlayer().create();
  player.value.initialize(videoRef.value, src, true);

  player.value.updateSettings({
    streaming: {
      abr: {
        autoSwitchBitrate: {
          video: false,
        },
      },
    },
  });

  player.value.on(MediaPlayer.events.STREAM_INITIALIZED, () => {
    const bitrateList =
      player.value?.getTracksFor("video")[0].bitrateList || [];
    bitrates.value = bitrateList;

    if (!player.value) return;

    const availableQualities = player.value.getRepresentationsByType("video");
    const targetRepresentationIndex = availableQualities.length - 1;
    player.value?.setRepresentationForTypeByIndex("video", 0);
  });
};

const changeQuality = (index: number) => {
  player.value?.setRepresentationForTypeByIndex("video", index, true);

  selectedQuality.value = index;
};

watch(selectedQuality, (newIndex) => {
  changeQuality(newIndex);
});

onMounted(() => {
  initializePlayer();
});

onUnmounted(() => {
  player.value?.reset();
});
</script>

<template>
  <div>
    <video
      ref="videoRef"
      controls
      width="1280"
      height="720"
      muted
      playsinline
    />

    <div class="quality-selector" v-if="bitrates.length > 0">
      <label for="quality-select">Quality:</label>
      <select id="quality-select" v-model.number="selectedQuality">
        <option
          v-for="(track, index) in bitrates"
          :key="track.id"
          :value="index"
        >
          {{ track.height }}p
          <div v-if="track.bandwidth">
            ({{ Math.round(track.bandwidth / 1000) }} kbps)
          </div>
        </option>
      </select>
    </div>
  </div>
</template>

<!-- HLS -->

<!-- <script setup lang="ts">
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
      muted
    />

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
</template> -->
