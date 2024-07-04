<template>
  <SideBar/>
  <router-view class="main-content"/>
</template>

<script setup lang="ts">
import SideBar from '@/components/SideBar.vue'
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  display: flex
}

.main-content {
  flex: 7;
  overflow: hidden;
}
</style>
