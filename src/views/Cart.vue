<template>
<v-container>
    <h2>カート</h2>
    <h3>合計：(税込){{Math.floor(totalPrice*tax)}}円</h3>
    <v-btn color="success" :to="{name:'Buy'}" :disabled="totalPrice==0">購入画面に進む</v-btn>
    <template v-for="(item,index) in items">
        <v-card id="item" outlined :key="index" v-if="item.ordered==0">
            <v-row>
            <!-- 画像 -->
                <v-col>
                    <div id="img">
                        <v-img :src="item.img" alt="画像"></v-img>
                    </div>
                </v-col>
            <!-- タイトルなど -->
            <v-col>
                <v-card-title>
                <router-link :to="{name:'ItemDetail',params:{item_id:item.id}}">{{item.name}}</router-link>
                </v-card-title>
                <v-card-subtitle>{{item.author}}</v-card-subtitle>
            <!-- 金額 -->
            <div>
                <v-card-text>{{item.price}}円</v-card-text>
            </div>
            </v-col>
            <!-- ボタン -->
            <v-col>
                <v-card-actions>
                <template v-if="$store.state.login_user">
                <v-btn dark color="orange" @click="addFav(item)">
                    <v-icon>mdi-star</v-icon>
                </v-btn>
                </template>
                </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </template>
</v-container>
</template>
<script>
export default {
    data(){
        return {
            items:this.$store.getters.cartItems,
            tax:1.1
        }
    },
    computed:{
        totalPrice(){
            let sum = 0;
            this.items.forEach(item => {
                if(item.ordered==0){
                    sum+=Number(item.price)
                }
            });
            return sum
        }
    }
}
</script>
<style scoped>
#item{
  margin: 10px;
  padding: 10px;
}
#img{
  width: 230px;
  height: 280px;
}
</style>