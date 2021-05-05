import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideNav:false,
    login_user:null,
    items:[]
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
    },
    addItem(state,id,item){
      item.id = id
      state.items.push(item)
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
    },
    getQiitaApi(params){
      return axios.get('https://qiita.com/api/v2/items',{params})
    },
    addItem({getters,commit},item){
      if(getters.uid==='QX6XOexamwXkrEZWofZJEsdR6lz1'){
        firebase.firestore().collection(`admins/${getters.uid}/items`).add(item).then((doc)=>{
          commit('addItem',{id:doc.id,item})
        })
      }
    }
  },
  modules: {
  }
})
