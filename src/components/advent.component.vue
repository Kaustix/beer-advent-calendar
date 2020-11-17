<template>
    <div class="advent">
        <span>Day {{day}} - {{person}}</span>
    </div>
</template>

<script>
export default {
    name: 'advent',
    props: {
        day: Number,
        person: String
    }
}
</script>

<style lang="less" scoped>
    .advent {
        font-size: 40px;
        color: rgb(65, 65, 65);
        font-family: 'Mountains of Christmas', cursive;
        text-align: center;
        padding-bottom: 8px; 
    }

    
</style>