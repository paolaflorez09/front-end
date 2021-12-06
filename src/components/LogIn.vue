<template>

    <!-- <div class="logIn_user">
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
    </div> -->

<section class="vh-100">
    <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" class="img-fluid"
            alt="Sample image">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
            <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0">Ingresar</p>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control form-control-lg"
                v-model="user.username"
                placeholder="Ingresa un email válido" />
                <label class="form-label" for="form3Example3">Email </label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
                <input type="password" id="form3Example4" class="form-control form-control-lg"
                v-model="user.password"
                placeholder="Ingresa contraseña" />
                <label class="form-label" for="form3Example4">Password</label>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
                <button type="button" class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem;">Ingresar</button>
                <p class="small fw-bold mt-2 pt-1 mb-0">¿No tienes una cuenta? <a href="#!"
                    class="link-danger">Rgístrate</a></p>
            </div>

            </form>
        </div>
        </div>
    </div>
 </section>


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
/*
.logIn_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        padding-top:250px ;
        padding-bottom: 250px ;
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
*/

.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}

</style>