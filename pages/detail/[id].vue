<script setup lang="ts">
import Map from '@/components/map/index.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = computed(() => route.params.id)
</script>

<template>
  <div class="flex">
    <div>
      {{ id }}
    </div>
    <Map />
  </div>
</template>

<style scoped></style>
