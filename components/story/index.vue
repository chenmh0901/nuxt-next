<script setup lang="ts">
interface IProps {
  data: StoryDetail;
}
defineProps<IProps>()

const bkgStyle = computed(() => {
  return {
    "backgroundColor":
      "#" + Math.floor(Math.random() * 16777215).toString(16)
  }
})

</script>

<template>
  <NuxtLink :to="`/detail/${data.id}`">
    <div class="fade-in ">
      <div :style="bkgStyle">
        <img :src="data.avatarSrc" alt="img">
      </div>
      <div>
        <h2>{{ data.title }}</h2>
        <p>{{ data.date }}</p>
        <p>{{ data.startLocation }} - {{ data.endLocation }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.fade-in {
  animation: fadeIn 1s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
  }
}
</style>
