<template>
    <v-data-table 
    :headers="headers"
    :items="boughtItems"
    :items-per-page="3"
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
            ],
            items:this.$store.getters.cartItems,
        }
    },
    computed:{
        boughtItems(){
            let array = [];
            this.items.forEach((item)=>{
                if(item.ordered==1){
                    array.push(item);
                }
            })
            return array;
        }
    }

}
</script>