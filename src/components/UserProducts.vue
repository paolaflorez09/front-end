<template>



</template>


<script>   


export default {
    name: "UserProducts",

    data: function(){
        return {
            solicitud: [],
            solicitudes: [],
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
        getSolicitudesList: async function(){

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