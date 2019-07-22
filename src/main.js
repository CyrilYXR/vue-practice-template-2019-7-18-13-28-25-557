import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    value: 0
  },
  mutations: {
    increment(state){
      state.value++
    },
    reduce(state){
      state.value--
    }
  }
})

new Vue({
  el:'#app',
  store,
  render: h => h(App),
}).$mount('#app')
