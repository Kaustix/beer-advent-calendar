<template>
    <div :class="container">
        <img src="https://cdn.shoplightspeed.com/shops/626891/files/23829661/660x880x1/oldman-river-brewing-st-joes-abbey-style-brown-ale.jpg" alt="beer"/>
        <div>
            <p>{{ beer.name }}</p>
            <p>{{ beer.brewery }}</p>
            <p>{{ beer.location }}</p>
            <p>{{ beer.desription }} </p>
            <div>
                <span>ABV {{ beer.abv }}%</span>
                <span>Bitterness {{ bitterness }} IBU</span>
                <span>Website {{ beer.website }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card',
    props: {
        beer: Object
    },
    computed: {
        bitterness() {
            return this.beer ? this.beer.toSring() : "No"
        }
    }
}
</script>