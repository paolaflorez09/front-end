<template>
    <br>
    <h2>Mis Datos</h2>
    <br>
    <div class="container">
		<div class="main-body">
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">ID</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" v-model="userInfo.id" class="form-control" placeholder="0">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Username</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" v-model="userInfo.username" class="form-control" placeholder="J0hnDo3">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Nombre</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" v-model="userInfo.name" class="form-control" placeholder="John Doe">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="email" v-model="userInfo.email" class="form-control" placeholder="john@example.com">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Telefono</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="number" v-model="userInfo.phone" class="form-control" placeholder="325 452 4233">
                    </div>
                </div>

                <div v-if="userInfo.admin" class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Estado Admin</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" v-model="userInfo.admin" class="form-control" placeholder="false">
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-9 text-secondary">
                        <input type="button" class="btn btn-primary px-4" value="Modificar">
                    </div>
                </div>
            </div>	
		</div>
	</div>

</template>


<script>
import gql from "graphql-tag";

export default {
  name: 'UserInfo',

    data: function() {
        return {
          userInfo: {
              id: "",
              username: "",
              name: "",
              email: "",
              phone: "",
              admin: ""
          },
        };
    },

  methods: {

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
            this.$emit("completedGetUserAdmin", dataGet);
            this.userInfo = dataGet;
        })
        .catch((error) => {
            console.log(error)
          alert("ERROR: Fallo geUserData");
        });
    },

  },
  
  created: async function(){
      this.getUserData();
  },

}
</script>

<style>
body{
    background: #f7f7ff;
    margin-top:20px;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid transparent;
    border-radius: .25rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%);
}
.me-2 {
    margin-right: .5rem!important;
}
</style>
