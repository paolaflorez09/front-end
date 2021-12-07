<template>

<div id="app" class="app">

    <header class="header">
        <nav>
          <div>
            <button v-on:click="toogleFunction(isClicked)">NavBar</button>
            <button v-on:click="loadHome">Guarderia</button>
            <button v-on:click="loadProducts">Productos</button>
            <button v-on:click="loadAboutUs">About Us</button>
          </div>
          <div>
            <button v-on:click="loadLogIn">Login</button>
            <button v-on:click="loadSignUp">Registrarse</button>
          </div>
        </nav>   
    </header>

    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div v-if="isClicked" class="col-auto px-0">
                <div id="sidebar" class="collapse collapse-horizontal show border-end">
                    <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">
                        <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-bootstrap"></i> <span>Item</span> </a>
                        <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-film"></i> <span>Item</span></a>
                        <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-heart"></i> <span>Item</span></a>
                        <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-bricks"></i> <span>Item</span></a>
                        <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-clock"></i> <span>Item</span></a>
                        <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-archive"></i> <span>Item</span></a>
                        <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-gear"></i> <span>Item</span></a>
                        <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-calendar"></i> <span>Item</span></a>
                        <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-envelope"></i> <span>Item</span></a>
                    </div>
                </div>
            </div>
            <main class="col ps-md-2 pt-2">
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
            </main>
        </div>
    </div>

    <footer id="footer" class="footer">
      <div>
          <p>Guarderia</p>
          <p>Acerca de</p>
          <p>Sobre Nosotros</p>
      </div>
    </footer>

  </div>
</template>

<script>
import Sidebar from './components/sidebar/SideBar.vue'
import {sidebarWidth} from './components/sidebar/state'

export default {

  components: {Sidebar},

  setup() {
    return {sidebarWidth}
  },

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
    },

    loadAdminUsers: function() {
      this.$router.push({ name: "AdminUsers" });
    },

    toogleFunction: function(isActive){
        this.isClicked = !isActive
      return this.isClicked;
    }

  },

  data(){
      return {
          isClicked: true
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

#sidebar-nav {
    width: 200px;
}

.col-auto{
    color: white;
    background-color: rgb(85, 182, 85);
    float: left;
    /*position: fixed;*/
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    display: flex;
    flex-direction: column;
}


</style>
