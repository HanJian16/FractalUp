<template>
    <div :class="{ 'container-card-details': true, 'view-details': viewDetails }">
        <div :class="{ 'container-cards': true, 'view-details': viewDetails }">
            <CardComponent v-for="(country, idx) in listCountries" :key="country.code" :country="country"
                :active="idxDetails == idx" @click="() => handleOpenDetails(idx)" />
        </div>
        <div class="details" v-if="viewDetails">
            <CountryDetails :country="listCountries[idxDetails]" @closeDetails="handleCloseDetails" />
        </div>
    </div>
</template>

<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import CountryDetails from '@/components/CountryDetails.vue'

const store = useStore();
const listCountries = computed(() => store.getters.getTotalList)

const viewDetails = ref(false);
const idxDetails = ref(-1);

onMounted(() => {
    store.dispatch('formatLists')
})

const handleOpenDetails = (idx: number) => {
    viewDetails.value = true;
    idxDetails.value = idx;
}

const handleCloseDetails = () => {
    viewDetails.value = false;
    idxDetails.value = -1;
}
</script>

<style scoped lang='scss'>
.container-card-details {
    width: 100%;
    height: 88%;
    display: flex;
    flex-direction: row;
    margin: 40px 0px;

    @include respond-to(lg) {
        display: flex;
        flex-direction: column;
    }

    .container-cards {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1em;
        width: 100%;
        padding: 2em;
        box-sizing: border-box;
        overflow: auto;
        margin: 0 20px;

        &.view-details {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            width: 70%;
        }

        @include respond-to(xl) {
            grid-template-columns: repeat(2, minmax(0, 1fr));

            &.view-details {
                grid-template-columns: repeat(1, minmax(0, 1fr));
                width: 60%;
            }
        }

        @include respond-to(lg) {
            display: flex;
            flex-direction: column;
            &.view-details {
                width: 100%;
            }
        }
    }

    .details {
        background-color: $white;
        width: 35%;

        @include respond-to(xl) {
            width: 45%;
        }

        @include respond-to(lg) {
            width: 100%;
            height: 50%;
        }
    }

}
</style>