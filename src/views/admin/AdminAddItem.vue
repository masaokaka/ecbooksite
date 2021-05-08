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
                <v-text-field type="number" v-model="item.price" label="価格"></v-text-field>
                <v-text-field v-model="item.publisher" label="出版社"></v-text-field>
                <v-text-field type="date" v-model="item.date" label="発売日"></v-text-field>
                <v-text-field v-model="item.text" label="内容"></v-text-field>
                <v-text-field type="number" v-model="item.stock" label="在庫"></v-text-field>
                <v-file-input v-model="img" prepend-icon="mdi-camera" label="画像"></v-file-input>
                <div class="text-center">
                    <v-btn class="ml-2" @click="$router.push({name:'AdminItems'})">キャンセル</v-btn>
                    <v-btn color="primary" class="ml-2" @click="submit()">保存</v-btn>
                </div>
            </v-form>
        </v-card-text>
        </v-card>
    </v-layout>
</v-container>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            img:null,
            item:{},
        }
    },
    methods:{
        ...mapActions(['addItem','addImage','getImageUrl']),
        submit(){
            this.addImage({item:this.item,img:this.img}).then(()=>{
                this.$router.push({name:'AdminItems'})
            })
            this.item = {};
            this.img=null;
        }
    }
}
</script>