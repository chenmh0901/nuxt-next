<script setup lang="ts">
import { onMounted } from 'vue'
import { mountMap, cameraMoveTo } from 'traveler-map'

const next = () => {
  cameraMoveTo(30, 120, 13)
}

const prev = () => {
  cameraMoveTo(30, 120, 10)
}
const initMap = () => {
  mountMap('map')
}

onMounted(initMap)
</script>

<template>
  <div id="map" />
  <el-button round type="primary" @click="prev">
    [DEBUG-PRVE]
  </el-button>
  <el-button round type="primary" @click="next">
    [DEBUG-NEXT]
  </el-button>
</template>

<style scoped>
#map {
  width: 1500px;
  height: 1000px;
}
</style>
