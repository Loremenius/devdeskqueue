<template>
    <div class="register">
        <h1>Register</h1>
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
            <label>
                Role:
                <select v-model.trim="role">
                    <option value="student"> Student </option>
                    <option value="admin">Admin</option>
                </select>
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
            passAgain:'',
            role:'student'
        }
    }
}
</script>

<style scoped>

</style>