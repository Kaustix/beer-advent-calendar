<template>
     <div class="beer">
         <div>
            <img :src="require('../assets/beers/' + beer.day + '.png')" alt="beer" class="image"/>
        </div>
        <div>
            <div class="name">{{beer.name}}</div>
            <div class="brewery">{{beer.brewery}}</div>
            <div class="location">{{beer.location}}</div>
            <p class="description">{{beer.description}}</p>
            <div class="info">
                <info title="Style" :details="beer.style"/>
                <info title="ABV" :details="beer.abv + '%'"/>
                <info title="Bitterness" :details="bitterness + ' IBU'"/>
            </div>
        </div>
    </div>
</template>

<script>
import info from '@/components/shared/info.component';

export default {
    name: 'beer',
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
    .beer {
        display: flex;
        flex-direction: row;
    }

    .image {
        height: 200px;
        padding-right: 8px;
    }

    .name {
        font-weight: bold;
        font-size: 20px;
    }

    .location {
        color: rgba(0, 0, 0, 0.54);
        font-size: 14px;
        font-style: italic;
    }

    .description {
        font-size: 14px;
    }

    .info {
        display: flex;
        flex-direction: row;

        >div {
            flex: 33.33%;
        }
    }
</style>