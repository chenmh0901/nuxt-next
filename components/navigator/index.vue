<script setup lang="ts">
import { Collection, Upload } from '@element-plus/icons-vue'
import NavBlock from './components/nav-block.vue'
</script>

<template>
  <div class="h-[60px]" />
  <div class="nav">
    <NavBlock>
      <nuxt-link class="logo" to="/">
        <img src="~/assets/logo.png" alt="logo">
        旅行日记
      </nuxt-link>
    </NavBlock>
    <NavBlock>
      <div class="nav__links">
        <nuxt-link to="/">
          <button class="link ">
            <el-icon>
              <Collection />
            </el-icon>
            日记
          </button>
        </nuxt-link>
        <nuxt-link to="/upload">
          <button class="link">
            <el-icon>
              <Upload />
            </el-icon>
            上传
          </button>
        </nuxt-link>
      </div>
    </NavBlock>

    <NavBlock>
      <div class="link">
        avatar
      </div>
    </NavBlock>
  </div>
</template>

<style scoped>
.nav {
  @apply fixed z-50 w-full h-[60px] flex select-none;
  backdrop-filter: blur(8px);
  background: rgba(233, 233, 233, 0);

  .logo {
    @apply flex items-center text-2xl hover:bg-gray-300 p-3 rounded-lg;

    img {
      @apply w-[30px] h-[30px];
    }
  }

  .nav__links {
    @apply h-[50px] flex items-center gap-4;
  }

  .link {
    @apply text-black text-lg flex items-center gap-1 hover:bg-gray-300 p-3 rounded-lg;
  }
}
</style>
