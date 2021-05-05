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

export default {
  components:{
    Header,
    Footer,
    SideNav
  }
}
</script>