<template>
    <div class="calender">
        <day class="day" v-for="beer in beers" :beer="beer" :key="beer.id"/>
    </div>
</template>

<script>
import { FETCH_BEERS } from '@/store/action.types';
import day from '@/components/day.component';

export default {
    name: 'calendar',
    components: {
        day
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

    .day {
        width: 480px;
        margin: 8px;
    }
</style>