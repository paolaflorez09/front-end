<template>
<div id="app" class="app">

    <header class="header">
        <nav>
          <div>
            <button v-on:click="loadHome">Guarderia</button>
            <button v-on:click="loadProducts">Productos</button>
            <button v-on:click="loadAboutUs">About Us</button>
          </div>
          <div>
            <button v-on:click="loadLogIn">Login</button>
            <button v-on:click="loadAboutUs">Registrarse</button>
          </div>
        </nav>   
    </header>
    <!-- <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar scroll</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Link
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Link</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header> -->

    <div class = "main-component">
      <router-view
        v-on:completedLogin="completedLogin"
        v-on:completedSignUp="compltedSignUp"
        v-on:logOut="logOut"
        v-on:loadHome="loadHome"
        v-on:loadProducts="loadProducts"
        v-on:loadAboutUs="loadAboutUs"
        v-on:loadSignUp="loadSignUp"
      >
      </router-view>
    </div>

    <footer id="footer" class="footer">
      <div>
          <p>Guarderia</p>
          <p>Acerca de</p>
          <p>Sobre Nosotros</p>
      </div>
    </footer>
    
    <!-- <footer class="bg-light text-center text-lg-start">
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2020 Copyright:
        <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer> -->

  </div>

</template>

<script>
export default {
  name: 'App',

  methods: {
    loadLogIn: function(){
      this.$router.push({name: "logIn"});
    },

    loadSignUp: function(){
      this.$router.push({name: "signUp"})
    },

    loadHome: function() {
      this.$router.push({ name: "home" });
    },

    loadProducts: function() {
      this.$router.push({ name: "products" });
    },

    loadAboutUs: function() {
      this.$router.push({ name: "about" });
    }

  }


}
</script>


<style>


  body {
    margin: 0 0 0 0;
    background-color: #FDFEFE;
  }

  header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    
    background-color: #F29F05;
    color: white; 

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 25px;
    top: 0; 
  }

  header nav{
      width: 100%;
      height: 100%;

      background-color: #F29F05;
      color: white; 

      display: flex;
      justify-content: space-around;
      align-items: center;

  }

  header nav button{
    color: white;
    background: #F29F05;
    border: 1px none #E5E7E9;
    padding: 10px 20px;
  }

  header nav button:hover{
    color: white;
    background: #634610;
    border: 1px none #E5E7E9;
  }

  .main-component{
   
    margin: 0%;
    padding: 0%;

    background: #FDFEFE ;
  }


  footer{
        
        background-color: #ca7c16;    
        margin-top: 25px; 
        height: 80px;
        
        padding: 10px 10px 0px 10px;
        bottom: 0;
        width: 100%;
        
    }
  footer div{
        display: flex;
        height: 100%;
        align-items: center;
        align-content: space-between;
        justify-content: space-between;
        color: white; 
        max-width: 1200px;
        margin: 0 auto;
    }

 footer nav{
    width: 100%;
    height: 100%;
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white; 
    float: right;

  }

  html{
    background-color: white;
  }

</style>
