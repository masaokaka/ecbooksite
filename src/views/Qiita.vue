<template>
<v-app>
    <h2>Qiita記事一覧</h2>
    <v-col cols="12" sm="6" md="3">
        <v-text-field v-model="searchText" label="フリーワード検索"></v-text-field>
        <v-btn @click="search()"><v-icon>mdi-search-web</v-icon></v-btn>
    </v-col>
    <v-list>
        <v-list-item v-for="qiita,index in qiitaData" :key="index">
            <a>{{qiita.title}}</a>
        </v-list-item>
    </v-list>
</v-app>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            searchText:'',
            qiitaData:[]
        }
    },
    methods:{
        ...mapActions(['getQiitaApi']),
        search(){
            let params = {page: 1, per_page: 20, query: this.serachText};
            this.getQiitaApi(params).then((res)=>{
                res.data.forEach(item => {
                    this.qiitaData.push(item)
                });
            })
        }
    }
}
</script>