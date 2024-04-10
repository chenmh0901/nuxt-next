<script setup lang="ts">
import { onMounted } from 'vue'
import { mountMap, cameraMoveTo } from 'traveler-map'

const move = () => {
  cameraMoveTo(30, 120, 13)
}

const initMap = () => {
  mountMap('map')
}

onMounted(initMap)
</script>

<template>
  <div id="map" />
  <button @click="move" />
</template>

<style scoped>
#map {
  width: 1500px;
  height: 1000px;
}
</style>
