<script setup lang="ts">
import VideoPlayer from "../../features/Watch/VideoPlayer.vue";
</script>

<!-- Dash: https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd  -->
<!-- HLS:  https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8 -->
<template>
  <VideoPlayer
    src="https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd"
  />
</template>
