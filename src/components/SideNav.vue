<template>
<v-navigation-drawer app v-model="$store.state.sideNav" clipped temporary>
    <v-list>
        <v-list-item>
            <v-list-item-content v-if="$store.getters.userName">
                <v-list-item-title>{{$store.getters.userName}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="item,index in items" :key="index" :to="item.link">
            <v-list-item-icon><v-icon>{{item.icon}}</v-icon></v-list-item-icon>
            <v-list-item-title>{{item.name}}</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="$store.getters.uid==='WHX8Vx1cGTUHV2m4xx5o20q2Rjk2'" to="/admin">
            <v-list-item-icon><v-icon>mdi-account-tie</v-icon></v-list-item-icon>
            <v-list-item-title>Admin</v-list-item-title>
        </v-list-item>
    </v-list>
</v-navigation-drawer>
</template>
<script>
export default {
    data(){
        return{
            items:[
                {name:'Home',icon:'mdi-home',link:'/'},
                {name:'Favorite',icon:'mdi-star',link:'/favorite'},
                {name:'Cart',icon:'mdi-cart',link:'/cart'},
                {name:'Mypage',icon:'mdi-human-handsdown',link:'/mypage'},
                {name:'Qiita',icon:'mdi-bookmark-multiple',link:'/qiita'}
            ]
        }
    }
}
</script>