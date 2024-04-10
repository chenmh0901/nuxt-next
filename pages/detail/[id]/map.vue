<script setup lang="ts">
import { useRouteParams } from '@vueuse/router'
import Map from '@/components/map/index.vue'

const routeParams = useRouteParams('type')
</script>

<template>
  <div>
    <Map />
    <div>{{ routeParams }}</div>
  </div>
</template>

<style scoped></style>
