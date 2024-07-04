<template>
  <div class="container-general">
    <CustomInput :showDialog="showDialog" @openDialog="openDialog"/>
    <GridCard @click="notShowDialog"/>
  </div>
</template>

<script lang="ts" setup>
import GridCard from '@/components/GridCard.vue';
import CustomInput from '@/components/CustomInput.vue';
import { ref } from 'vue'

const showDialog = ref(false);

const notShowDialog = () => {
  showDialog.value = false;
}

const openDialog = () => {
  showDialog.value = true;
}
</script>

<style scoped lang='scss'>
.container-general {
  display: flex;
  flex: 7;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: $primario;
  box-sizing: border-box;
  padding: 20px;
}
</style>