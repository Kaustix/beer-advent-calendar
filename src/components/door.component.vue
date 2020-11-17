<template>
    <div class="door">
        <div class="text">Day {{day}}</div>
        <div><img :src="require('../assets/santa-beer.png')" alt="santa-beer" class="image"/></div>
    </div>
</template>

<script>
export default {
    name: 'door',
    props: {
        day: Number
    }
}
</script>

<style lang="less" scoped>
     .door {
        border-radius: 16px;
        background: #f7f7f7;
        font-family: 'Mountains of Christmas', cursive;
        text-align: center;
        font-size: 50px;

        display: flex;
        flex-direction: column;
        align-content: center;
        justify-items: center;
    }

    .image {
        width: 200px;
    }
</style>