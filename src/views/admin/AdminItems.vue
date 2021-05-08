<template>
<v-container>
    <v-flex xs12 class="text-center">
        <h2>商品一覧</h2>
    </v-flex>
    <v-btn color="primary" elevation="4" @click="$router.push({name:'AdminAddItem'})">
        商品追加
    </v-btn>
    <v-flex xs12>
        <v-data-table 
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
        >
        <template v-slot:[`item.price`]="{ item }">
            <td>{{item.price}}円</td>
        </template>
        <template v-slot:[`item.stock`]="{ item }">
            <td>{{item.stock}}個</td>
        </template>
        <!-- ここに画像をスロットで表示させる -->
        <template v-slot:[`item.img`]="{ item }">
            <img :src="item.img" width="100px" height="100px">
        </template>
        </v-data-table>
    </v-flex>
</v-container>
</template>
<script>
export default {
    data(){
        return {
            headers:[
                {text:'画像',value:'img'},
                {text:'商品名',value:'name'},
                {text:'著者',value:'author'},
                {text:'出版社',value:'publisher'},
                {text:'価格(税抜)',value:'price'},
                {text:'在庫',value:'stock'},
            ],
            items:this.$store.state.items
        }
    },
    methods:{
    }
}
</script>