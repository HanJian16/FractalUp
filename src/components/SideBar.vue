<template>
  <nav class="container">
    <div class="logo-container">
      <h1>Logo</h1>
    </div>
    <div class="router-container">
      <router-link :to="{name: 'home'}">Home</router-link>
      <router-link :to="{name: 'view1'}">Vista 1</router-link>
      <router-link :to="{name: 'view2'}">Vista 2</router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">

.container {
  padding: 30px;
  flex: 1;
  background-color: $secundario;

  .logo-container {
    background-color: $grey;
    display: flex;
    justify-content: center;
    border-radius: 15px;
    margin-bottom: 15px;
  }

  .router-container {
    display: flex;
    flex-direction: column;

    a {
      display: flex;
      align-items: center;
      background-color: $secundario;
      margin-top: 10px;
      border-radius: 8px;
      font-weight: bold;
      color: $white;
      width: 100%;
      height: 40px;
      margin-bottom: 10px;
      padding-left: 20px;
      text-decoration: none;

      &.router-link-active {
        color: $secundario;
        background-color: $white;
      }
    }
  }

}
</style>