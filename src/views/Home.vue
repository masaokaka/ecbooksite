<template>
  <v-container id="container">
    <v-layout row rap justify-left>
    <SearchForm/>
    </v-layout>
    <v-flex xs12 class="text-left">
      <h2>書籍一覧</h2>
    <!-- ソート機能 -->
      <v-select 
        v-model="selected"
        label="並べ替え"
        :items="options"
        item-text="label"
        item-value="code"
      >
      </v-select>
    </v-flex>
    <v-layout row rap justify-center>
        <v-card id="item" v-for="(item,index) in items" :key="index" outlined>
          <!-- 画像 -->
          <div id="img">
            <v-img :src="item.img" alt="画像"></v-img>
          </div>
          <!-- タイトルなど -->
          <div id="contents">
            <v-card-title>{{item.name}}</v-card-title>
            <v-card-subtitle>{{item.author}}</v-card-subtitle>
          </div>
          <!-- 金額 -->
          <div>
            <v-card-text>{{item.price}}円</v-card-text>
          </div>
          <!-- ボタン -->
          <div id="buttons">
            <v-card-actions>
              <template v-if="$store.state.login_user">
              <v-btn dark color="orange" @click="addToFav(item)">
                <v-icon>mdi-star</v-icon>
              </v-btn>
              <v-btn color="success" @click="addToCart(item)">
                <v-icon>mdi-cart</v-icon>
              </v-btn>
              </template>
            </v-card-actions>
          </div>
        </v-card>
    </v-layout>
    <!-- ページネーション -->
    <!-- <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="10"
              @input="getPage"
              color="accent"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div> -->
  </v-container>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'
export default {
  name: 'Home',
  components: {
    SearchForm
  },
  data(){
    return{
      selected:null,
      options:[
          {label:'価格が安い',code:'lowPrice'},
          {label:'価格が高い',code:'highPrice'},
      ]
    }
  },
  computed:{
    items(){
      if(this.selected==='lowPrice'){
        let array = this.$store.state.items;
        array.sort((a,b)=>{
          if(a.price < b.price){
            return -1;
          }else {
            return 1;
          }
        })
        return array
      }else if(this.selected==='highPrice'){
        let array = this.$store.state.items;
        array.sort((a,b)=>{
          if(a.price > b.price){
            return -1;
          }else {
            return 1;
          }
        })
        return array
      }else{
        return this.$store.state.items;
      }
    }
  }

}
</script>
<style>
#item{
  margin: 10px;
  padding: 10px;
}
#img{
  width: 200px;
  height: 280px;
}
#buttons{
  text-align: right;
}
</style>
