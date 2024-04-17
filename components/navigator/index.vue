<script setup lang="ts">

</script>

<template>
  <div class="nav">
    <nuxt-link class="logo" to="/">
      <img src="~/assets/logo.png" alt="logo">
      旅行日记
    </nuxt-link>

    <div class="nav__links">
      <nuxt-link to="/">
        <button class="link">
          日记
        </button>
      </nuxt-link>
      <nuxt-link to="/upload">
        <button class="link">
          上传
        </button>
      </nuxt-link>
    </div>

    <div>
      avatar
    </div>
  </div>
</template>

<style scoped>
.nav {
  @apply flex items-center justify-between px-[400px] py-1 bg-gray-100 font-bold select-none w-[100vw];

  .logo {
    @apply flex items-center text-2xl hover:bg-gray-300 p-2 rounded-lg;

    img {
      @apply w-[30px] h-[30px];
    }
  }

  .nav__links {
    @apply h-[50px] flex items-center gap-4;
  }

  .link {
    @apply text-black hover:bg-gray-300 p-2 rounded-lg;
  }
}
</style>
