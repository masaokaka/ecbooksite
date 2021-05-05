import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideNav:false,
    login_user:null
  },
  getters:{
    uid:state=>state.login_user ? state.login_user.uid:null,
    userName:state=>state.login_user ? state.login_user.displayName:'',
    //書き方を変えてみただけ、特に理由なし
    photoURL(state){
      if(state.login_user){
        return state.login_user.photoURL;
      }else{
        return '';
      }
    },
  },
  mutations: {
    sideNav(state){
      state.sideNav = !state.sideNav
    },
    setLoginUser(state,user){
      state.login_user = user
    },
    deleteLoginUser(state){
      state.login_user = null
    }
  },
  actions: {
    sideNav({commit}){
      commit('sideNav')
    },
    login(){
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
      firebase.auth().signInWithRedirect(google_auth_provider);
      })
    },
    setLoginUser({commit},user){
      commit('setLoginUser',user)
    },
    deleteLoginUser({commit}){
      commit('deleteLoginUser')
    },
    logout(){
      firebase.auth().signOut();
    }
  },
  modules: {
  }
})
