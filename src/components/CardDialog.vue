<template>
    <div class="dialog-container">
        <div class="sidebar">
            <label class="title">Filtrar por continentes</label>
            <label class="button" @click="cleanList">Limpiar</label>
        </div>
        <GridContinents @clean="cleaInput"/>
    </div>
</template>

<script setup lang="ts">
import GridContinents from '@/components/GridContinents.vue'
import { useStore } from 'vuex'
import {defineEmits} from 'vue'

const store = useStore();

const emit = defineEmits(['clean']);

const cleanList = () => {
    store.dispatch('cleanListCountries')
}

const cleaInput = () => {
    emit('clean');
}
</script>

<style scoped lang='scss'>
.dialog-container {
    position: absolute;
    top: 60px;
    left: -30px;
    width: 600px;
    border-radius: 40px;
    padding: 30px;
    background-color: $white;
    height: 400px;
    z-index: 1000;

    .sidebar {
        display: flex;
        justify-content: space-between;

        .title {
            font-size: 18px;
            color: $secundario;
        }

        .button {
            color: $terciario;
        }
    }
}
</style>