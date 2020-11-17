<template>
    <div class="container">
        <div>
            <div>
                <span class="day">{{beer.day}}</span>
            </div>
            <img :src="require('../assets/beers/' + beer.day + '.png')" alt="beer" class="beer-image"/>
            <div class="person">{{beer.person}}</div>
        </div>
        <div class="details">
            <div class="name">{{beer.name}}</div>
            <div>{{beer.brewery}}</div>
            <div class="location">{{beer.location}}</div>
            <p class="description">{{beer.description}}</p>
            <div class="info">
                <info title="ABV" :details="beer.abv + '%'"/>
                <info title="Bitterness" :details="beer.ibu + ' IBU'"/>
            </div>
        </div>
    </div>
</template>

<script>
import info from '@/components/info.component.vue';

export default {
    name: 'beer-card',
    components: {
        info
    },
    props: {
        beer: Object
    },
    computed: {
        bitterness() {
            return this.beer.ibu ? this.beer.ibu : "No"
        }
    }
}
</script>

<style lang="less" scoped>
    .container {
        display: flex;
        flex-direction: row;

        //Card
        padding: 8px;
        margin: 8px 0;
        border-radius: 8px;
        background: white;

        &:hover {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            cursor: pointer;
        }
    }

    .beer-image {
        width: 140px;
        height: 200px;
    }

    .day {
        font-size: 70px;
        color: grey;
        font-family: 'Mountains of Christmas', cursive;
    }

    .person {
        font-weight: bold;
        font-size: 20px;
    }

    .name {
        font-weight: bold;
        font-size: 20px;
    }

    .details {
        width: 100%;
    }

    .description {
        font-size: 14px;
    }

    .info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-right: 20px;
    }
</style>