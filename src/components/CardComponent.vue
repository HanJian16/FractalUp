<template>
    <div :class="{ 'card': true, active: props.active }">
        <img :src="props.country.img">
        <div class="details">
            <img :src="srcFlag">
            <div>
                <h3>{{ props.country.name }}</h3>
                <p>{{ props.country.continent.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { ICountry } from '@/interfaces/ICountry'

const srcFlag = computed(() => `https://flagsapi.com/${props.country.code}/shiny/64.png`)

const props = defineProps<{
    country: ICountry,
    active: boolean;
}>();
</script>

<style scoped lang='scss'>
.card {
    background-color: $white;
    border-radius: 40px;
    margin: 10px;
    height: 18em;
    width: 90%;
    display: flex;
    flex-direction: column;

    img {
        height: 65%;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
    }

    .details {
        display: flex;
        margin: 20px;

        img {
            width: 80px;
            height: 50px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }

        h3 {
            margin-top: 0;
            margin-bottom: 0;
            margin-left: 20px;
            color: $terciario;
        }

        p {
            margin-top: 0;
            margin-bottom: 0;
            margin-left: 20px;
            color: $secundario;
        }
    }

    &.active {
        background-color: $terciario;

        h3 {
            color: $white;
        }

        p {
            color: $white;
        }
    }
}
</style>