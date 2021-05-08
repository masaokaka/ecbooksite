<template>
    <v-app>
        <v-row justify="center">
            <v-col
                cols="12"
                sm="10"
                md="8"
                lg="6"
            >
                <v-card>
                    <p style="color:red;" v-if="$store.state.errorMsg">
                        <strong>{{$store.state.errorMsg}}</strong>
                    </p>
                    <v-card-title><h1>新規登録</h1></v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field 
                                v-model="name"
                                prepend-inner-icon="mdi-face"
                                type="text"
                                label="ユーザー名" 
                            />
                            <v-text-field 
                                v-model="email"
                                prepend-inner-icon="mdi-email"
                                type="email"
                                label="メールアドレス" 
                            />
                            <v-text-field
                                v-model="password"
                                prepend-inner-icon="mdi-key"
                                type="password"
                                label="パスワード"
                            />
                            <v-btn @click="registerConfirm">登録する</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            name:'',
            email:'',
            password:'',
        }
    },
    created(){
        this.errorDelete();
    },
    methods:{
        ...mapActions(['register','errorDelete']),
        registerConfirm(){
            if(confirm(`${this.email}で登録しますがよろしいですか？`)){
                this.register({name:this.name,email:this.email,password:this.password});
            }
        }
    }
}

</script>