<template>
    <div class="calender">
        <beer-card class="beer-card" v-for="beer in beers" :beer="beer" :key="beer.id"/>
    </div>
</template>

<script>
import { FETCH_BEERS } from '@/store/action.types';
import BeerCard from './beer-card.component';

export default {
    name: 'calendar',
    components: {
        'beer-card': BeerCard
    },
    mounted() {
        this.$store.dispatch(FETCH_BEERS);
    },
    computed: {
        beers() {
            return this.$store.getters.beers;
        }
    }
}
</script>

<style lang="less" scoped>
    .calender {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .beer-card {
        // width: 25%; // change this later, should just flex to best size
        width: 400px;
        margin: 8px;
    }
</style>