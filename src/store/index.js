import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideNav:false,
    login_user:null,
    items:[],
    sort:null,
    errorMsg:null
  },
  getters:{
    uid:state=>state.login_user ? state.login_user.uid:null,
    userName:state=>state.login_user ? state.login_user.displayName:'',
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
    addItem(state,{id,item}){
      item.id = id
      state.items.push(item)
      console.log(item.name)
    },
    errorDelete(state){
      state.errorMsg = null
    },
    clearItems(state){
      state.items =[];
    },
  },

  actions: {
    sideNav({commit}){
      commit('sideNav')
    },
    //ユーザー登録
    register({state,commit},{name,email,password}){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res)=>{
        res.user.updateProfile({
          displayName:name
        }).then(()=>{
          let user = firebase.auth().currentUser;
          commit('setLoginUser',user);
        })
      }).catch((error) => {
        state.errorMsg = error.message;
      });
    },
    //ログイン
    login({state,commit},{email,password}){
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((user) => {
          commit('setLoginUser',user);
        }).catch((error) => {
          state.errorMsg = error.message;
        });
      })
    },
    //ログアウト
    logout({commit}){
      firebase.auth().signOut();
      commit('deleteLoginUser');
    },
    setLoginUser({commit},user){
      commit('setLoginUser',user);
    },
    deleteLoginUser({commit}){
      commit('deleteLoginUser');
    },
    getQiitaApi(params){
      return axios.get('https://qiita.com/api/v2/items',{params})
    },
    //画像データをstorageに追加して、URLを取得
    addImage({dispatch,getters},{item,img}){
      if(getters.uid==='WHX8Vx1cGTUHV2m4xx5o20q2Rjk2'){
        let storageRef = firebase.storage().ref().child(`img/${img.name}`);
        storageRef.put(img).then(()=>{
          storageRef.getDownloadURL().then((url)=>{
            dispatch('addItem',{item:item,url:url})
          })
        })
      }
    },
    addItem({getters,commit},{item,url}){
      if(getters.uid==='WHX8Vx1cGTUHV2m4xx5o20q2Rjk2'){
        item.img = url
        firebase.firestore().collection(`admins/${getters.uid}/items`).add(item).then((doc)=>{
          commit('addItem',{id:doc.id,item})
        })
      }
    },
    fetchItems({commit}){
        firebase.firestore().collection(`admins/WHX8Vx1cGTUHV2m4xx5o20q2Rjk2/items`).get().then(snapShot=>{
          snapShot.forEach(doc=>{
            commit('addItem',{id:doc.id,item:doc.data()})
          })
        })
    },
    errorDelete({commit}){
      commit('errorDelete');
    },
    clearItems({commit}){
      commit('clearItems');
    },
    search({dispatch,commit},text){
      //今入っているアイテムを消してから検索結果を挿入
      dispatch('clearItems').then(()=>{
        firebase.firestore().collection(`admins/WHX8Vx1cGTUHV2m4xx5o20q2Rjk2/items`).get()
        .then(snapShot=>{
          snapShot.forEach(doc=>{
            let findName = doc.data().name
            //search関数でnullの時は-1を返すようにしている
            if(0<=findName.search(text)){
              commit('addItem',{id:doc.id,item:doc.data()})
            }
          })
        })
      })
    },
  }
})
