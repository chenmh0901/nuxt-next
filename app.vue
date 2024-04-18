<template>
  <div class="root">
    <Navigator />
    <NuxtPage />
    <Bar class="mt-auto" />
  </div>
</template>
<style>
body,
html {
  margin: 0;
  padding: 0;
}

.root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
