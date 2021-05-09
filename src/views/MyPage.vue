<template>
<v-container>
    <h2>マイページ</h2>
    <hr style="margin:20px 0px;">
    <h3>プロフィール</h3>
    <v-flex>
        <v-btn icon @click="flag=!flag"><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn color="success">更新</v-btn>
        <v-row v-for="item,index in items" :key="index">
            <v-col>{{item.title}}:
                <v-text-field :value="item.value" size="40" :disabled="flag"></v-text-field>
            </v-col>
            <v-col>
            </v-col>
        </v-row>
        <hr style="margin:20px 0px;">
    </v-flex>
    <h3>注文履歴</h3>
    <OrderedItems/>
</v-container>
</template>
<script>
import OrderedItems from '@/components/OrderedItems.vue'
export default {
    components:{
        OrderedItems
    },
    data(){
        return {
            flag:true,
            items:[
                {title:'ユーザー名',value:this.$store.state.login_user.displayName},
                {title:'メールアドレス',value:this.$store.state.login_user.email},
                {title:'名前',value:''},
                {title:'住所',value:''}
            ]
        }
    },
}
</script>