<template>
  <h1 id="title">Beer Advent Calendar</h1>
  <Calendar/>
</template>

<script>
import Calendar from '@/components/calendar.component.vue'

export default {
  name: 'App',
  components: {
    Calendar
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
// background: linear-gradient(to right, #e6f0ff 0%, #bae0fc 100%);
// background: linear-gradient(to right, #a5fea0 0%, #ee606d 100%);

}

html, body {
  margin: 0px;
}

#title {
  font-size: 50px;
  font-family: 'Mountains of Christmas', cursive;
  text-align: center;
}
</style>
