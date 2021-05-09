<template>
<v-container>
    <v-btn to="/cart" icon><v-icon>mdi-arrow-left</v-icon>戻る</v-btn>
    <h3>合計金額：<span style="color:red;">{{totalPrice*tax}}</span>円 (計{{totalItemNum}}点)</h3>
    <h2>送り先住所の入力</h2>
    <v-btn color="success" @click="buyConfirm">購入を確定する</v-btn>
</v-container>
</template>
<script>
import {mapActions} from 'vuex'
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
        },
        totalItemNum(){
            let num = 0;
            this.items.forEach(item => {
                if(item.ordered==0){
                    num++
                }
            });
            return num
        }
    },
    methods:{
        ...mapActions(['buy']),
        buyConfirm(){
            if(confirm('購入しますがよろしいですか？')){
                this.buy();
                this.$router.push('/').catch(()=>{});
            }
        }
    }
}
</script>