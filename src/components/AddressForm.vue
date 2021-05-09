<template>
<v-container>
  <v-layout row rap>
    <v-card elevation="4" width="500px">
      <v-card-text>
          <v-form>
              <v-text-field v-model="address.zip" label="000-0000"></v-text-field>
              <v-btn @click="autoCompleteAddress">自動入力</v-btn>
              <v-text-field v-model="address.pref" label="都道府県"></v-text-field>
              <v-text-field v-model="address.city" label="市区町村"></v-text-field>
              <v-text-field v-model="address.town" label="町域"></v-text-field>
              <v-text-field v-model="address.num" label="番地"></v-text-field>
              <v-text-field v-model="address.tower" label="マンションなど(任意)"></v-text-field>
          </v-form>
      </v-card-text>
    </v-card>
  </v-layout>
</v-container>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            address:{
                zip:null,
                pref:null,
                city:null,
                town:null,
                num:null,
                tower:null,
            }
        }
    },
    methods: {
        autoCompleteAddress(){
            axios.get(`https://api.zipaddress.net/?zipcode=${this.address.zip}`)
            .then(res=>{
                this.address.pref = res.data.data.pref
                this.address.city = res.data.data.city
                this.address.town = res.data.data.town
            })
        }
    }
}
</script>