<template>
  <SnowFlakes/>
  <h1 id="title">Beer Advent Calendar</h1>
  <Calendar/>
</template>

<script>
import Calendar from '@/components/calendar.component.vue'
import SnowFlakes from '@/components/shared/snowflakes.component.vue';

export default {
  name: 'App',
  components: {
    Calendar,
    SnowFlakes
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 20px;
  
  background-color: #F6F7F8;
  background: url('./assets/background.png') no-repeat fixed;
  background-size: 100%
}

html, body {
  margin: 0px;
}

#title {
  font-size: 50px;
  font-family: 'Mountains of Christmas', cursive;
  text-align: center;
  color: white;
}
</style>
