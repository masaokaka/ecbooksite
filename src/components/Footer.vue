<template>
    <v-footer id="footer" dark>
        <v-flex xs12 class="text-center">
                <v-btn v-for="link,index in links" :key="index" class="mx-4" icon :to="link.link">
                    <v-icon size="24px">
                        {{ link.icon }}
                    </v-icon>
                </v-btn>
            <div>
                <v-divider></v-divider>
            </div>
            <div style="margin-top:10px;">
                <strong>プログラミング書店</strong>
            </div>
            <div>
                <small>All Rights Reserved</small>
            </div>
        </v-flex>
    </v-footer>
</template>
<script>
export default {
    data(){
        return{
            links:[
                {link:'/',icon:'mdi-home'},
                {link:'/mypage',icon:'mdi-human-handsdown'},
                {link:'/favorite',icon:'mdi-star'},
                {link:'/cart',icon:'mdi-cart'},
                {link:'/qiita',icon:'mdi-bookmark-multiple'}
            ]
        }
    }
}
</script>
<style scoped>
#footer{
    background-color:#28a745;
}
</style>