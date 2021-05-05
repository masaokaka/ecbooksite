<template>
<div>
    <v-app-bar id="header">
        <v-app-bar-nav-icon @click="toggle"></v-app-bar-nav-icon>
        <v-app-bar-title>プログラミング書店</v-app-bar-title>
        <v-spacer></v-spacer>
        <p v-if="$store.getters.userName">ようこそ  {{$store.getters.userName}}</p>
        <v-btn icon @click="logoutConfirm" v-if="$store.state.login_user">
            <v-icon>mdi-logout</v-icon>
        </v-btn>
        <v-btn icon @click="login" v-else>
            <v-icon>mdi-login</v-icon>
        </v-btn>
    </v-app-bar>
</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions(['sideNav','login','logout']),
        toggle(){
            this.sideNav();
        },
        logoutConfirm(){
            if(confirm('ログアウトしますか？')){
                this.logout()
            }
        }
    }
}
</script>
<style scoped>
#header{
    background-color: greenyellow;
}
</style>