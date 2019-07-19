<template>
  <div id="app">
    <input type="text" v-model.number="counterNum">
    <counter-group :counterNum="counterNum"></counter-group>
  </div>
</template>

<script>
import CounterGroup from './components/CounterGroup.vue'

export default {
  name: 'app',
  components: {
    CounterGroup
  },
  data(){
    return {
      counterNum: 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
