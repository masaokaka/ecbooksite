<template>
<div id="searchbox">
    <v-flex xs12 class="text-left">
        <h2>書籍検索</h2>
    </v-flex>
    <v-text-field v-model="text">
        <template v-slot:append-outer>
            <v-btn color="success" @click="search(text)">検索</v-btn>
        </template>
    </v-text-field>
</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            text:'',
        }
    },
    methods:{
        ...mapActions(['search']),
    }
}
</script>
<style scoped>
#searchbox{
    margin-bottom:20px;
}
.v-text-field{
    width: 400px;
}
</style>