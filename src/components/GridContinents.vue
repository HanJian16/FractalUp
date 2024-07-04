<template>
    <div class="continents-container">
        <div class="continent-container" @click="() => FilterForContinent('EU')">
            <div :class="{ 'imgContainer': true, 'active': filterFor.includes('EU') }">
                <img src="../assets/europa.png">
            </div>
            <label>Europa</label>
        </div>
        <div class="continent-container" @click="() => FilterForContinent('AM')">
            <div :class="{ 'imgContainer': true, 'active': filterFor.includes('AM') }">
                <img src="../assets/america.png">
            </div>
            <label>América</label>
        </div>
        <div class="continent-container" @click="() => FilterForContinent('AS')">
            <div :class="{ 'imgContainer': true, 'active': filterFor.includes('AS') }">
                <img src="../assets/asia.png">
            </div>
            <label>Asia</label>
        </div>
        <div class="continent-container" @click="() => FilterForContinent('OC')">
            <div :class="{ 'imgContainer': true, 'active': filterFor.includes('OC') }">
                <img src="../assets/oceania.png">
            </div>
            <label>Oceanía</label>
        </div>
        <div class="continent-container" @click="() => FilterForContinent('AF')">
            <div :class="{ 'imgContainer': true, 'active': filterFor.includes('AF') }">
                <img src="../assets/africa.png">
            </div>
            <label>África</label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { defineEmits, ref, Ref } from 'vue'

const store = useStore();
const emit = defineEmits(['clean']);

const filterFor: Ref<string[]> = ref([]);

const FilterForContinent = (code: string) => {
    if (filterFor.value.includes(code)) {
        const idx = filterFor.value.indexOf(code);
        filterFor.value.splice(idx, 1);
    } else {
        filterFor.value.push(code);
    }

    store.dispatch('filterContinents', filterFor);
    emit('clean');
}
</script>

<style scoped lang='scss'>
.continents-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    box-sizing: border-box;
    gap: 10px;
    margin: 20px 0;

    .continent-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        .imgContainer {
            border-radius: 20px;
            margin: 10px;
            
            &.active {
                box-shadow: 1px 1px 5px 5px rgba($color: $terciario, $alpha: 0.5);
            }

            img{
                height: 130px;
            }

        }

    }
}
</style>