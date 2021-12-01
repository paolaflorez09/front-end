<template>
  <div class="body">
    <div class="home">
      <header>
        <div>
            <a v-on:click="loadHome" class="logo">Guarderia</a>
            <a v-on:click="loadProducts" class="products">Productos</a>
            <a v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </a>
            <a v-if="is_auth" v-on:click="loadAdmin" class="login">Admin</a>
            <a v-on:click="loadLogIn" class="login">Login</a>
            
        </div>   
      </header>
      <div class="main-component">
        //
          <router-view  
              v-on:completedLogIn="completedLogIn"
              v-on:completedSignUp="completedSignUp"
          >
          </router-view>

          
      </div>
      <footer id="footer">
        <div>
            <p class="logo">Guarderia</p>
        <div class="acerdaDe">
            <p>Acerca de</p>
            <p>Sobre Nosotros</p>
        </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import home from '../src/views/Home';
import login from '../src/views/LogIn';
import products from '../src/views/Products'

export default {

  methods:{
    loadHome: function() {
          this.$router.push({ name: "Home" });
        },
    loadLogIn: function(){
            this.$router.push({name: "logIn"})
  },
    loadProducts: function() {
            this.$router.push({ name: "products" });
          },
  }

  
}
</script>


<style>
  *{
    box-sizing:border-box;
    margin:0;
  }
  body{
    display: flex !important;
    min-height: 500px !important;
    padding: 0px !important;
    width: 100% !important;
  }
  .body{
    min-height: 500px;
  }
  #app{
    width: 100% !important;
  }
  header{
    height: 70px;
    width: 100%;  
  }
  .home{
    margin: 0 auto;
  }
  footer{
        background-color: #ca7c16;    
        margin-top: 25px; 
        height: 80px;
        position: fixed;
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
    .acerdaDe{
        margin: 0;
        display: flex;
        flex-direction: column;
        height: 40px;
    }
    header{
        background-color: #ca7c16; 
        margin-bottom: 25px;   
    }
    header div{
        display: flex;
        height: 100%;
        align-items: center;
        align-content: space-between;
        justify-content: space-between;
        color: white; 
        max-width: 1200px;
        margin: 0 auto;
    }
    .logo{
        color: rgb(255, 255, 255);
        text-decoration: none;
        font-weight: bolder;
    }
    .login{
        background-color: #F2B705; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;;
    }
    a.router-link-exact-active{
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

</style>

