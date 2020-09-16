<template>
    <div class="login">
        <h1>Login</h1>
        <form class='login' v-on:submit.prevent="submit">
            <label>
                Username:
                <input type="text" v-model.trim="username"/>
            </label>
            <label>
                Password:
                <input type="password" v-model.trim="password"/>
            </label>
            <button>Login</button>
        </form>
    </div>
</template>

<script>
import { login } from "./ApiFunctions"

export default {
    name:'Login',
    data () {
        return {
            username:'',
            password:''
        }
    } ,
    methods:{
        submit:function () {
            // send to back end
            //console.log(`username: ${this.username}, password: ${this.password}`)
            const data = login( this.username, this.password )
            this.$router.push({ name:'Dashboard', params: { user: data }})
        }
    }
}
</script>

<style scoped>
    form{
        display: flex;
        flex-direction: column;
        width:25%;
    }
</style>