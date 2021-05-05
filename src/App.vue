<template>
<v-app>
  <Header></Header>
  <SideNav></SideNav>
  <v-main>
    <router-view></router-view>
  </v-main>
  <Footer></Footer>
</v-app>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SideNav from '@/components/SideNav.vue'
import {mapActions} from 'vuex'
import firebase from 'firebase'

export default {
  components:{
    Header,
    Footer,
    SideNav
  },
  methods:{
    ...mapActions(['setLoginUser','deleteLoginUser','fetchQiita'])
  },
  created(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.setLoginUser(user)
        if(user.uid==='QX6XOexamwXkrEZWofZJEsdR6lz1'){
          this.$router.push({name:'Admin'})
        }
      }else{
        this.deleteLoginUser()
      }
    })
  }
}
</script>