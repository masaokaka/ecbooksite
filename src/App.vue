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
    ...mapActions(['setLoginUser','deleteLoginUser','fetchItems'])
  },
  created(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user.uid==='WHX8Vx1cGTUHV2m4xx5o20q2Rjk2'){
        this.setLoginUser(user).then(()=>{
          this.fetchItems();
          this.$router.push("/admin/items").catch(()=>{});
        });
      }else if(user){
        this.setLoginUser(user).then(()=>{
          this.fetchItems();
          this.$router.push('/').catch(()=>{});
        });
      }else{
        this.deleteLoginUser();
        this.$router.push('/').catch(()=>{});
      }
    })
  }
}
</script>