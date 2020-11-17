<template>
    <card class="container" v-if="isDayVisible()">
        <template v-slot:header>
            <advent :day="beer.day" :person="beer.person" />
        </template>
        <template v-slot:content>
            <beer :beer="beer" />
        </template>
    </card>
    <div class="container" v-else>
        <door :day="beer.day" />
    </div>
</template>

<script>
import card from '@/components/shared/card.component';
import advent from '@/components/advent.component';
import beer from '@/components/beer.component';
import door from '@/components/door.component';

export default {
    name: 'day',
    components: {
        card,
        advent,
        beer,
        door
    },
    props: {
        beer: Object
    },
    methods: {
        isDayVisible() {
            const day = new Date().getDate();
            const month = new Date().getMonth();
            return month === 11 && this.beer.day <= day;
        }
    }
}
</script>

<style lang="less" scoped>
    .container {
        display: flex;
        flex-direction: column;
        z-index: 100;
    }
</style>