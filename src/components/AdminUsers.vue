<template>

    <div class="container-grid">
        <h2>Usuarios</h2>
        <div class="container" >
            <table class="table table-hover" >
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Username</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">IsAdmin?</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="userOne in users" v-bind:key="userOne.id">
                    <th scope="row">{{userOne.id}}</th>
                    <td>{{userOne.username}}</td>
                    <td>{{userOne.name}}</td>
                    <td>{{userOne.email}}</td>
                    <td>{{userOne.phone}}</td>
                    <td>{{userOne.admin}}</td>
                    <td>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo">Modificar</button>
                    </td>

                </tr>
            </tbody>
            </table>
        </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Escribe id para borrar</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Id:</label>
                    <input type="text" class="form-control" id="recipient-name" v-model="idSoliEliminar">
                </div>
                <!-- <div class="mb-3">
                    <label for="message-text" class="col-form-label">Message:</label>
                    <textarea class="form-control" id="message-text"></textarea>
                </div> -->
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" v-on:click="deleteSoli(idSoliEliminar)">Borrar</button>
            </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Escribe datos para modificar</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

                    
                        <br>
                        <form v-on:submit.prevent="processSignUp" class="mx-1 mx-md-4">
                            <br>
                            <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                                <input v-model="user.username" type="text" id="form3Example1c" class="form-control" />
                                <label class="form-label" for="form3Example1c">Tu nombre de Usuario</label>
                            </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                                <input v-model="user.password" type="password" id="form3Example4c" class="form-control" />
                                <label class="form-label" for="form3Example4c">Tu contraseña</label>
                            </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                                <input v-model="user.name" type="text" id="form3Example4cd" class="form-control" />
                                <label class="form-label" for="form3Example4cd">Tu nombre</label>
                            </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                                <input v-model="user.email" type="text" id="form3Example3c" class="form-control" />
                                <label class="form-label" for="form3Example3c">Your Email</label>
                            </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                                <input v-model="user.phone" type="text" id="form3Example1c" class="form-control" />
                                <label class="form-label" for="form3Example1c">Tu número telefónico</label>
                            </div>
                            </div>
                        </form>

            <div class="modal-footer">
                <button type="button" class="btn btn-primary" v-on:click="ModiSoli(idSoliModi)">Modificar</button>
            </div>
            </div>
        </div>
    </div>    

</template>


<script>   
import gql from "graphql-tag";

export default {
    name: "AdminUsers",

    data: function(){
        return {
            userOne: [],
            users: [],
            user: {
                cedula: "",
                nombreCliente: "",
                ciudad: "",
                FinalizedState: "",
                idcentro: "",
                mensaje: ""
            },
            idSoliEliminar: "",
            idSoliModi: ""
        }
    },

    methods: {
        getProductsList: async function(){
            await this.$apollo
            .query({
            query: gql`
                query UserList {
                    userList {
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
                this.users = result.data.userList;

            })
            .catch((error) => {
            alert("ERROR: Fallo geUserData");
            });
        },

        deleteSoli: function(id) {

        },

        ModiSoli: function(id) {

        }
    },
    created: async function(){
        this.getProductsList();
    }
}


</script>


<style>
    *, ul , li {
        list-style: none;
    }
    ul li > a {
        text-decoration: none;
        color: #000;
    }
    ul {
        display: flex;
        justify-content: center;
        gap: 15px;
    }
    .greetings{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9.5em;
    }

    .greetings h1{
        font-size: 50px;
        color: #283747;
    }

    .greetings span{
        color: crimson;
        font-weight: bold;
    }

    .container-grid {
        display: grid;
        grid: repeat(2, 1fr);
    }

    .btn .show:active {
        background: rgb(247, 63, 247);
    }

    .signUp_user{
        margin: 40px 0;
    }

    .container_signUp_user {
        border: 3px solid  #5b06a0;
        border-radius: 10px;
        width: 50%;
    }

    .signUp_user form{
        width: 95%;
    }

    .signUp_user input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        border: 1px solid #5b06a0;
    }

    .signUp_user button{
        width: 100%;
        height: 40px;
        color: #E5E7E9;
        background: #5b06a0;
        border: 1px solid #E5E7E9;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0 25px 0;
    }

    .signUp_user button:hover{
        color: #E5E7E9;
        background: crimson;
        border: 1px solid #5b06a0;
    }

    textarea {
        width: 100%;
    }

    .dropDownCentroOpciones{
        width: 100%;
        width: 100%;
        height: 40px;
        border: 1px solid #5b06a0;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0 25px 0;
    }

</style>