<script setup lang="ts">
import { useThrottleFn, useDebounceFn } from '@vueuse/core';

const trottle = ref(0)
const debounce = ref(0)
const download = useDebounceFn(() => {
  logs.value.push(timer.value)
  debounce.value++
}, 5000)

const upload = useThrottleFn(() => {
  trottle.value++
}, 1000)
const { timer, start, stop, reset } = useTimer()

const logs = ref<number[]>([])

</script>

<template>
  <div class="flex gap-3 items-center justify-center p-4 m-4 shadow-md rounded-xl w-[300px] bg-cyan-50 h-[780px]">
    {{ trottle }}
    <el-button @click="upload">
      上传
    </el-button>
    {{ debounce }}
    {{ timer }}
    {{ logs }}
    <el-button @click="() => {
      start()
      download()
    }">
      下载
    </el-button>
  </div>
</template>

<style scoped></style>
