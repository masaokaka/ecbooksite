<template>
<v-container>
    <v-btn to="/" icon><v-icon>mdi-arrow-left</v-icon>戻る</v-btn>
    <v-row no-gutters>
        <v-col align-self="start">
            <!-- 画像 -->
            <div id="img">
                <v-img :src="item.img" alt="画像"></v-img>
            </div>
        </v-col>
        <v-col align-self="start">
            <!-- タイトルなど -->
            <v-card-title>{{item.name}}</v-card-title>
            <v-card-subtitle>{{item.author}}</v-card-subtitle>
            <!-- 金額 -->
            <v-card-text>{{item.price}}円</v-card-text>
            <v-card-text>{{item.text}}</v-card-text>
        </v-col>
        <!-- ボタン -->
        <v-col align-self="end">
            <template v-if="$store.state.login_user">
            <v-btn dark color="orange" @click="addToFav(item)">
            <v-icon>mdi-star</v-icon>
            </v-btn>
            <v-btn color="success" @click="addToCart(item)">
            <v-icon>mdi-cart</v-icon>
            </v-btn>
            </template>
        </v-col>
    </v-row>
</v-container>
</template>
<script>
export default {
    data(){
        return {
            item:''
        }
    },
    created(){
        let items = this.$store.state.items;
        let paramId = this.$route.params.item_id;
        items.forEach(item => {
            if(item.id===paramId){
                this.item = item;
            }
        });
    }
}
</script>
<style scoped>
#img{
  width: 300px;
  height: 340px;
}
</style>