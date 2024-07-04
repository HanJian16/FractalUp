<template>
    <div class="custom-input">
        <div class="input-container">
            <h1>País</h1>
            <input type="text" placeholder="Escribe el pais que deseas ver" @focus="openDialog" v-model="input"
                @input="changeInput" />
            <CardDialog v-show="showDialog" @clean="cleanInput" />
        </div>
        <button class="custom-button" @click="changeInput">
            <span class="icon"><i class="fas fa-search"></i></span>
            <span>Buscar</span>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import CardDialog from '@/components/CardDialog.vue'
import { useStore } from 'vuex';

const store = useStore();
let input = ref('');

const props = defineProps<{
    showDialog: boolean
}>();

const emit = defineEmits(['openDialog'])

const openDialog = () => {
    emit('openDialog');
}

const changeInput = () => {
    store.dispatch('filterByInput', input.value)
}

const cleanInput = () => {
    input.value = '';
}
</script>

<style scoped lang='scss'>
.custom-input {
    width: 50%;
    height: 100px;
    display: flex;
    background-color: $white;
    justify-content: space-between;
    align-items: center;
    padding: 5px 30px;
    border-radius: 50px;
    box-sizing: border-box;

    .input-container {
        position: relative;

        h1 {
            margin: 0;
            font-size: 20px;
        }

        input {
            width: 150px;
            border: none;
            outline: none;
            padding: 8px 0px;
            font-size: 10px;
            background-color: transparent;
        }

        input::placeholder {
            color: $secundario;
        }
    }

    .custom-button {
        height: 35px;
        background-color: $terciario;
        color: $white;
        border: none;
        padding: 0px 20px;
        font-size: 15px;
        border-radius: 25px;
        display: flex;
        align-items: center;

        .icon {
            margin: 5px
        }

        span {
            padding: 0px 5px;
        }
    }

    @include respond-to(lg) {
        display: flex;
        flex-direction: column;
    }
}
</style>