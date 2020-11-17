<template>
     <div class="info-container">
        <div class="title">{{title}}</div> 
        <div class="details">{{details}}</div>
    </div>
</template>

<script>
export default {
    name: 'info',
    props: {
        title: String,
        details: String
    }
}
</script>

<style lang="less" scoped>
    .info-container {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .title {
        font-size: 12px;
    }

    .details {
        font-size: 16px;
        font-weight: bold;
    }
</style>