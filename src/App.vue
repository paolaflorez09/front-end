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
            <button v-if="!is_auth" v-on:click="loadLogIn">Login</button>
            <button v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
            <button v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
          </div>
        </nav>   
    </header>

    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div v-if="is_auth" class="col-auto px-0">
                <div id="sidebar" class="collapse collapse-horizontal show border-end">
                    <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">
                         <h2><span>{{username}}</span></h2>
                        <button v-on:click="loadUserInfo">Mi info</button> 
                        <button v-if="is_admin" v-on:click="loadAdminProducts">Productos</button>
                        <button v-if="is_admin" v-on:click="loadAdminUsers">Usuarios</button>
                    </div>
                </div>
            </div>
            <main class="col ps-md-2 pt-2">
              <div class = "main-component">
                <router-view
                  v-on:completedLogIn="completedLogIn"
                  v-on:completedSignUp="completedSignUp"
                  v-on:logOut="logOut"
                  v-on:completedGetUserAdmin="completedGetUserAdmin"
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
import gql from "graphql-tag";

export default {

  name: 'App',

    data: function() {
        return {
        };
    },

  computed: {
    is_auth: {
      get: function() {
        return this.$route.meta.requiresAuth;
      },
      set: function() { }
    },

  },

  data: async function(){
    return {
      is_admin: false,
      username: ""
    }
  },

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

    loadAdminProducts: function() {
      this.$router.push({ name: "AdminProducts" });
    },

    loadAdminUsers: function() {
      this.$router.push({ name: "AdminUsers" });
    },

    loadUserInfo: function() {
      this.$router.push({ name: "UserInfo" });
    },

    completedLogIn: async function(data) {
      localStorage.clear();
			localStorage.setItem("token_access", data.token_access);
			localStorage.setItem("token_refresh", data.token_refresh);
      //console.log(localStorage.getItem("token_refresh"))
      await this.getUserData();
      alert("Autenticación Exitosa");
      console.log(localStorage.getItem("is_admin"));
      this.username = localStorage.getItem("username");
      this.is_admin = localStorage.getItem("is_admin");
      console.log(this.is_admin);
			this.loadUserInfo();
    },

    completedSignUp: function(data) {
			alert("Registro Exitoso");
			this.completedLogIn(data);
    },

    logOut: function () {
			localStorage.clear();
			alert("Sesión Cerrada");
      this.loadLogIn();
      //location.reload();
		},

    getUserData: async function(){
        await this.$apollo
        .query({
        query: gql`
            query UserDetailById {
                userDetailById {
                    id
                    username
                    name
                    email
                    phone
                    admin
                }
            }
            `,
                
        })
        .then((result) => {
            let dataGet = {
                    id: result.data.userDetailById.id,
                    username: result.data.userDetailById.username,
                    name: result.data.userDetailById.name,
                    email: result.data.userDetailById.email,
                    phone: result.data.userDetailById.phone,
                    admin: result.data.userDetailById.admin
            };
            localStorage.setItem("is_admin", dataGet.admin);
            this.is_admin = dataGet.admin;
            localStorage.setItem("username", dataGet.username);
        })
        .catch((error) => {
            console.log(error)
          alert("ERROR: Fallo geUserData");
        });
    }

  },

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
