import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCp4CB8w-sY_MV97oIah636E7w0OAjLlSI",
  authDomain: "ecbooksite.firebaseapp.com",
  projectId: "ecbooksite",
  storageBucket: "ecbooksite.appspot.com",
  messagingSenderId: "397008812582",
  appId: "1:397008812582:web:08da89486c808bfe98c4e7",
  measurementId: "G-SDCLTME2L1"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
