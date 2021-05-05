import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideNav:false
  },
  mutations: {
    sideNav(state){
      state.sideNav = !state.sideNav
    }
  },
  actions: {
    sideNav({commit}){
      commit('sideNav')
    }
  },
  modules: {
  }
})
