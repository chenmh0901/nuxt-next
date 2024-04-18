<script lang="ts" setup>
import { useIntersectionObserver } from "@vueuse/core";
const mockData: StoryDetail[] = Array.from({ length: 3 }, (_, i) => ({
  id: i,
  avatarSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
  date: `2022-01-01`,
  title: `Title ${i}`,
  startLocation: `Start Location ${i}`,
  endLocation: `End Location ${i}`,
}));

const computeData = ref(mockData)

// 查找数据
const getResultFiltered = useFilter(computeData.value)
const onclick = () => {
  computeData.value = getResultFiltered()
}

// 增加懒加载数据
let loading = false
const addLazyData = async () => {
  if (loading) return
  loading = true
  await new Promise((resolve) => setTimeout(resolve, 1000))
  computeData.value = [...computeData.value, ...mockData]
  loading = false
  if (targetIsVisible.value) {
    addLazyData()
  }
}

const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  },
)

// 长列表懒加载
watch(targetIsVisible, (isVisible) => {
  if (isVisible) {
    addLazyData()
  }
})
</script>

<template>
  <div class="content">
    <el-button @click="onclick">
      [DEBUG-SORT]
    </el-button>
    <ul class="flex gap-1 flex-wrap m-auto justify-center">
      <Story v-for="data in computeData" :key="data.id" class="story-card" :data="data" />
      <div ref="target" v-loading="true" class="h-[404px] w-[332px]" />
    </ul>
  </div>
</template>
<style scoped>
.content {
  @apply flex flex-col items-center w-[1200px] mx-auto gap-1 py-2;
}

.story-card {}
</style>
