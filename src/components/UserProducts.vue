<template>

    <div class="height d-flex justify-content-center align-items-center">
        <div class="card p-3">
            <div class="d-flex justify-content-between align-items-center ">
                <div class="mt-2">
                    <h4 class="text-uppercase">Ikea</h4>
                    <div class="mt-5">
                        <h5 class="text-uppercase mb-0">Blanda Matt</h5>
                        <h1 class="main-heading mt-0">VASE</h1>
                        <div class="d-flex flex-row user-ratings">
                            <div class="ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                            <h6 class="text-muted ml-1">4/5</h6>
                        </div>
                    </div>
                </div>
                <div class="image"> <img src="https://i.imgur.com/MGorDUi.png" width="200"> </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-2 mb-2"> <span>Available colors</span>
                <div class="colors"> <span></span> <span></span> <span></span> <span></span> </div>
            </div>
            <p>A great option weather you are at office or at home. </p> <button class="btn btn-danger">Add to cart</button>
        </div>
    </div>

    <div class="height d-flex justify-content-center align-items-center">
        <div class="card p-3">
            <div class="d-flex justify-content-between align-items-center ">
                <div class="mt-2">
                    <h4 class="text-uppercase">Ikea</h4>
                    <div class="mt-5">
                        <h5 class="text-uppercase mb-0">Blanda Matt</h5>
                        <h1 class="main-heading mt-0">VASE</h1>
                        <div class="d-flex flex-row user-ratings">
                            <div class="ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                            <h6 class="text-muted ml-1">4/5</h6>
                        </div>
                    </div>
                </div>
                <div class="image"> <img src="https://i.imgur.com/MGorDUi.png" width="200"> </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-2 mb-2"> <span>Available colors</span>
                <div class="colors"> <span></span> <span></span> <span></span> <span></span> </div>
            </div>
            <p>A great option weather you are at office or at home. </p> <button class="btn btn-danger">Add to cart</button>
        </div>
    </div>

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

body {
    background-color: #dce3f0
}

.height {
    height: 100vh
}

.card {
    width: 350px;
    height: 370px
}

.image {
    position: absolute;
    right: 12px;
    top: 10px
}

.main-heading {
    font-size: 40px;
    color: red !important
}

.ratings i {
    color: orange
}

.user-ratings h6 {
    margin-top: 2px
}

.colors {
    display: flex;
    margin-top: 2px
}

.colors span {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    margin-right: 6px
}

.colors span:nth-child(1) {
    background-color: red
}

.colors span:nth-child(2) {
    background-color: blue
}

.colors span:nth-child(3) {
    background-color: yellow
}

.colors span:nth-child(4) {
    background-color: purple
}

.btn-danger {
    height: 48px;
    font-size: 18px
}

</style>