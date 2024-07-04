<template>
    <div class="container-details">
        <div class="button-container">
            <button @click="handleClose">X</button>
        </div>
        <div class="container-image-title">
            <img :src="props.country.img" alt="">
            <div class="title-container">
                <img :src="srcFlag" alt="">\
                <div class="title">
                    <h1>{{ props.country.name }}</h1>
                    <p>{{ props.country.continent.name }}</p>
                </div>
            </div>
        </div>
        <div class="text">
            <h1>Capital:</h1>
            <p>{{ props.country.capital }}</p>
        </div>
        <div class="text">
            <h1>Language: </h1>
            <p>{{ props.country.languages[0].name }}</p>
        </div>
        <div class="text">
            <h1>Currency: </h1>
            <p>{{ props.country.currency }}</p>
        </div>
        <div class="text">
            <h1>Population: </h1>
            <p>I don't know</p>
        </div>
        <div class="text">
            <h1>Region: </h1>
            <p>not found</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
import ICountry from '@/interfaces/ICountry'

const props = defineProps<{
    country: ICountry;
}>();

const emit = defineEmits(['closeDetails'])

const srcFlag = computed(() => `https://flagsapi.com/${props.country.code}/shiny/64.png`)
console.log(srcFlag);

const handleClose = () => {
    emit('closeDetails');
}
</script>

<style scoped lang='scss'>
.container-details {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 30px 30px;
    position: relative;

    @include respond-to(lg) {
        .container-image-title {
            display: flex;
            justify-content: space-around;
        }
    }

    .button-container {
        position: absolute;
        width: min-content;
        right: 0;
        top: 0;

        button {
            font-size: 20px;
            width: 30px;
            height: 30px;
            margin: 10px;
            background-color: $white;
            border: none;
            border-radius: 15px;
        }

        button:hover {
            background-color: $grey
        }
    }

    img {
        width: 80%;
        border-radius: 15px;

        @include respond-to(lg) {
            width: 25%;
        }
    }

    .title-container {
        display: flex;
        align-items: center;

        img {
            width: 70px;
            height: 50px;
        }

        .title {
            margin: 15px 0;

            h1 {
                margin: 0;
                color: $terciario;
            }

            p {
                margin: 0;
            }
        }
    }

    .text {
        display: flex;
        align-items: center;

        h1 {
            margin: 0;
            font-size: 22px;
            color: $terciario;
        }

        p {
            margin: 10px 15px;
            font-size: 22px;
        }
    }
}
</style>