<template>
    <div class="card-container">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'card'
}
</script>

<style lang="less" scoped>
    .card-container {
        border-radius: 16px;
        background: #f7f7f7;
    }

    .header {
        border-radius: 16px 16px 0px 0px;
        background-color: #dfdfdf;
        border-bottom: 1px solid #dfdfdd;
        padding: 8px;
    }

    .content {
        padding: 8px;
        height: 100%;
    }

</style>