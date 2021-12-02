<template>
    <div class="logIn_user">
        <div class="container_logIn_user">
            <h2>Login</h2>
            <form v-on:submit.prevent="processLogInUser" >
                <input class="field" type="text" v-model="user.username" placeholder="Usuario">
                <br>
                <input class="field" type="password" v-model="user.password" placeholder="Constraseña">
                <br>
                <button type="submit">Iniciar Sesion</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "LogIn",
    data: function(){
        return {
            user: {
                username:"",
                password:""
            }
        }
    },

}
</script>


<style>
.logIn_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

.container_logIn_user {
        border: 1px solid #00152b;
        border-radius: 10px;
        width: 25%;
        height: 60%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

.logIn_user h2{
color: #00152b;
}

.field {
    border-radius: 10px;
}

.logIn_user form{
    width: 70%;
}

.logIn_user input{
    height: 40px;
    width: 100%;
   
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
   
    border: 1px solid #00152b;
}
.logIn_user button{
    width: 100%;
    height: 40px;

    color: #E5E7E9;
    background: #00152b;
    border: 1px solid #E5E7E9;

    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0;
}
.logIn_user button:hover{
    color: #E5E7E9;
    background: rgb(86, 192, 100);
    border: 1px solid #00152b;
}
</style>