<script lang="ts" setup>
</script>

<template>
  <ul class="flex gap-1 flex-wrap w-[1000px]">
    <nuxt-link to="/detail/1/">
      <Story id="1" />
    </nuxt-link>
    <nuxt-link to="/detail/2/">
      <Story id="2" />
    </nuxt-link>
    <Story id="3" />
    <Story id="4" />
    <Story id="5" />
    <Story id="6" />
  </ul>
</template>
<style scoped></style>
