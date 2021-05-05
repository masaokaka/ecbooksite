<template>
<v-container>
    <v-layout row rap justify-center>
        <v-flex xs12 class="text-center">
        <h2>管理画面</h2>
        </v-flex>
        <v-card elevation="4" width="500px">
        <v-card-text>
            <v-form>
                <v-text-field v-model="item.name" label="商品名"></v-text-field>
                <v-text-field v-model="item.author" label="著者"></v-text-field>
                <v-text-field v-model="item.price" label="価格"></v-text-field>
                <v-text-field v-model="item.publisher" label="出版社"></v-text-field>
                <v-text-field v-model="item.date" label="発売日"></v-text-field>
                <v-text-field v-model="item.text" label="内容"></v-text-field>
                <v-text-field type="number" v-model="item.number" label="在庫"></v-text-field>
                <v-file-input v-model="item.img" prepend-icon="mdi-camera" label="写真"></v-file-input>
                <div class="text-center">
                    <v-btn color="info" class="ml-2" @click="submit()">保存</v-btn>
                </div>
            </v-form>
        </v-card-text>
        </v-card>
        <v-flex xs12 class="text-center">
            <h2>商品一覧</h2>
        </v-flex>
        <v-data-table :header="headers" :items="items">
            <template></template>
        </v-data-table>
    </v-layout>
</v-container>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            items:[],
            item:{},
            headers:[
                {text:'商品名',value:'name'},
                {text:'著者',value:'author'},
                {text:'出版社',value:'publisher'},
                {text:'価格',value:'price'},
                {text:'在庫',value:'number'},
            ]
        }
    },
    methods:{
        ...mapActions(['addItem']),
        submit(){
            this.addItem(this.item)
        }
    }
}
</script>