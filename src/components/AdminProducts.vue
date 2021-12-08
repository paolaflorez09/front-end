<template>

    <div class="container-grid">
        <h2>Productos</h2>
        <div class="container" >
            <table class="table table-hover" >
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">isService</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" v-bind:key="product.id">
                    <th scope="row">{{product.id}}</th>
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.isService}}</td>
                    <td>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo">Modificar</button>
                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Borrar</button>
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
                    <input type="text" class="form-control" id="recipient-name" >
                </div>
                <!-- <div class="mb-3">
                    <label for="message-text" class="col-form-label">Message:</label>
                    <textarea class="form-control" id="message-text"></textarea>
                </div> -->
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" >Borrar</button>
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
                <div class="signUp_user">
                    <div class="container_signUp_user">
                        <br>
                        <form v-on:submit.prevent="processModificarSoli" >

                                <input type="number" v-model="idSoliModi" placeholder="id">
                                <br>
                                
                                <input type="number" v-model="user.cedula" placeholder="Cédula ">
                                <br>

                                <input type="text" v-model="user.nombreCliente" placeholder="Nombre ">
                                <br>

                                <input type="text" v-model="user.ciudad" placeholder="Ciudad ">
                                <br>

                                <select class="dropDownCentroOpciones" v-model="user.FinalizedState">
                                    <option selected value="true">Finalizado</option>
                                    <option value="false">No Finalizado</option>
                                </select>

                                <input type="number" v-model="user.idcentro" placeholder="Centro *">
                                <br>

                                <textarea type="text-Area" v-model="user.mensaje" placeholder="Modificar Mensaje*">
                                </textarea>
                                <br>

                                <!-- <button type="submit">Modificar</button> -->
                            </form>
                    </div>
                </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" >Modificar</button>
            </div>
            </div>
        </div>
    </div>    

</template>


<script>   
import gql from "graphql-tag";

export default {
    name: "AdminProducts",

    data: function(){
        return {
            product: [],
            products: [],
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
                query Products {
                    products {
                        id
                        name
                        price
                        isService
                    }
                }
                `,
                    
            })
            .then((result) => {
                this.products = result.data.products;
            })
            .catch((error) => {
            alert("ERROR: Fallo geUserData");
            });
        },



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