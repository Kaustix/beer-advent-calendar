<template>
    <card class="container">
        <template v-slot:header>
            <advent :day="beer.day" :person="beer.person" />
        </template>
        <template v-slot:content>
            <beer :beer="beer" />
        </template>
    </card>
</template>

<script>
import card from '@/components/shared/card.component';
import advent from '@/components/advent.component';
import beer from '@/components/beer.component';

export default {
    name: 'day',
    components: {
        card,
        advent,
        beer
    },
    props: {
        beer: Object
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