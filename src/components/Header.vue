<template>
<div>
    <v-app-bar id="header">
        <v-app-bar-nav-icon @click="toggle"></v-app-bar-nav-icon>
        <v-app-bar-title>プログラミング書店</v-app-bar-title>
    </v-app-bar>
</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions(['sideNav']),
        toggle(){
            this.sideNav();
        }
    }
}
</script>
<style scoped>
#header{
    background-color: aquamarine;
}
</style>