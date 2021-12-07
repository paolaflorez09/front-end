<template>

  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Regístrate</p>

  <div class="row justify-content-center">
    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      <form class="mx-1 mx-md-4">
        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <input type="text" id="form3Example1c" class="form-control" />
            <label class="form-label" for="form3Example1c">Tu nombre de Usuario</label>
          </div>
        </div>

        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <input type="password" id="form3Example4c" class="form-control" />
            <label class="form-label" for="form3Example4c">Tu contraseña</label>
          </div>
        </div>

        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <input type="password" id="form3Example4cd" class="form-control" />
            <label class="form-label" for="form3Example4cd">Repite tu contraseña</label>
          </div>
        </div>

        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <input type="email" id="form3Example3c" class="form-control" />
            <label class="form-label" for="form3Example3c">Your Email</label>
          </div>
        </div>

        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <input type="text" id="form3Example1c" class="form-control" />
            <label class="form-label" for="form3Example1c">Tu número telefónico</label>
          </div>
        </div>

        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button type="button" class="btn btn-primary btn-lg">Registrarse</button>
        </div>

      </form>

    </div>
    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

      <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image">

    </div>
  </div>

  
 


</template>

<script>
export default {
  name: 'signUp',
  setup() {
    
  },
}
</script>

<style>
/*
h2{
    text-align: center;
}
.container{
    height: 100%;
    width: 100%;
}

table{
    margin: 0 auto;
}

th{
    text-align: center;
}
*/

.vh-100{
      color: white;
    /*position: fixed;*/

    display: flex;
    flex-direction: column;
}

</style>