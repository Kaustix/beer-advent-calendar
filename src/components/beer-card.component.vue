<template>
    <div class="container">
        <div>
            <span class="day">{{ beer.day}} </span>
            <img src="https://cdn.shoplightspeed.com/shops/626891/files/23829661/660x880x1/oldman-river-brewing-st-joes-abbey-style-brown-ale.jpg" alt="beer" class="beer-image"/>
        </div>
        <div class="details">
            <h2>{{beer.name}}</h2>
            <div>{{beer.brewery}}</div>
            <div>{{beer.location}}</div>
            <p>{{beer.description}}</p>
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
        font-size: 60px;
        color: grey;
        font-family: 'Mountains of Christmas', cursive;
    }

    .details {
        width: 100%;
    }

    .info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-right: 20px;
    }
</style>