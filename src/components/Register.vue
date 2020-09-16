<template>
    <div class="register">
        <form class="registerForm">
            <label>
                Username:
                <input type="text" v-model.trim="username" />
            </label>
            <label>
                Password:
                <input type="password" v-model.trim="password" />
            </label>
            <label>
                Re-Enter Password:
                <input type="password" v-model.trim="passAgain"/>
            </label>
            <button>Create Profile</button>
        </form>
    </div>
</template>

<script>
export default {
    name:"Register",
    data(){
        return {
            username:'',
            password:'',
            passAgain:''
        }
    }
}
</script>

<style scoped>

</style>