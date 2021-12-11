<template>

<div>
    <button>Toggler</button>
        <div class ="cuerpo">
        <br>
        <div class ="catalogue">
            <ul class="card-wrapper">
                
                    <li class="card" v-for="product in products" v-bind:key="product.id">
                    <img :src="product.imgSrc" alt=''>
                    <h3><a href="/producto">{{product.name}}</a></h3>
                    <p>${{product.price}}</p>
                </li>
                
                
            </ul>
        </div> 
    </div>    
</div>



</template>


<script>   


export default {
    name: "UserProducts",

    data: function(){
        return {
            product: [],
            products: [],
            createProduct: {
                name: "",
                price: 0,
                service: false,
                imgSrc: ""
            },
            modifyProduct: {
                name: "",
                price: "",
                service: false,
                imgSrc: ""
            },
            idProductDelete: "",
            idProductModi: ""
        }
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
                this.userInfo = dataGet;
            })
            .catch((error) => {
                console.log(error)
            alert("ERROR: Fallo geUserData");
            });
        },

        deleteSoli: function(id) {

        },

        ModiSoli: function(id) {

        }
    },
    created: async function(){
        this.getSolicitudesList();
    }
}


</script>


<style>



</style>