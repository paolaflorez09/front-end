<template>

  <!-- <div class="container">
      <h2>Registrarse</h2>
      <table>
          <tr>
            <th></th>
            <th></th>
          </tr>
          <tr>
              <td class="SignUp">
                  <div class="Login_Container">
                      <form>
                        <input class="field" type="text"  placeholder="Usuario">
                        <br>
                        <input class="field" type="password"  placeholder="Constraseña">
                        <br>
                        <button type="submit">Registrarse</button>
                      </form>
                  </div>
              </td>
              <td>
                  <img  
                    src="https://media.istockphoto.com/vectors/boy-walking-with-funny-dog-a-child-in-casual-clothes-holding-a-puppy-vector-id1266509982?k=20&m=1266509982&s=612x612&w=0&h=1p93DAVZAtpbig9Zd9KD88FqbJrTotgfqlh3PoFaudE="
                    width = "554"
                    height = "612"
                  />
              </td>
          </tr>
      </table>
  </div> -->

  <section class="vh-100" style="background-color: #eee;">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Regístrate</p>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

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

</style>