<script setup lang="ts"></script>

<template>
  <header class="navigator">
    <router-link to="/">
      <div class="logo">
        <img src="~/assets/logo.png" alt="logo" class="w-[30px] h-[30px]">
        <h1 class="text-black text-xl">
          旅行日记
        </h1>
      </div>
    </router-link>
    <div class="menu">
      <router-link :to="{ path: '/' }">
        <button class="menu_btn">
          日记
        </button>
      </router-link>
      <router-link :to="{ path: '/upload' }">
        <button class="menu_btn">
          上传
        </button>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.navigator {
  @apply fixed top-0 w-full z-10 flex gap-12 items-center justify-center text-white bg-white;
}

.menu {
  @apply h-[50px] flex items-center gap-6 mr-5;
}

.menu_btn {
  @apply text-black font-bold h-[35px] border-0 rounded-full hover:bg-gray-300;
}

.logo {
  @apply flex flex-row gap-3 mr-1.5;
}
</style>
