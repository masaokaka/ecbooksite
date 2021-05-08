<template>
<div>
    <v-app-bar id="header" dark>
        <v-app-bar-nav-icon @click="toggle"></v-app-bar-nav-icon>
        <v-app-bar-title>プログラミング堂</v-app-bar-title>
        <v-spacer></v-spacer>
        <p v-if="$store.getters.userName">ようこそ  {{$store.getters.userName}}</p>
        <v-btn outlined @click="logoutConfirm" v-if="$store.state.login_user">ログアウト</v-btn>
        <template v-else>
        <v-btn color="primary" @click="$router.push('/register')">新規登録</v-btn>
        <v-btn outlined @click="$router.push('/login')">ログイン</v-btn>
        </template>
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
    background-color: #28a745;
}
</style>