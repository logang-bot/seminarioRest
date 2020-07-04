const mongoose= require('mongoose');
const RESTAURANTSCHEMA= new mongoose.Schema({
    nombre: {
        type: String,
        default: "SIN NOMBRE",
        required: [true, "El nombre del restaurant es requerido"]
    },
    nit:{
        type: Number,
        default: "SIN NIT"
    } ,

    propietario:{
        type: String,
        required: [true,"El nombre del propietario es requerido"]
    } ,
    calle: {
        type: String,
    },
    telefono: {
        type: Number
    },
    log: {
        type: String,
    },
    lat: {
        type: String,
    },
    logo:{
        type: String,
    },
    fechaRegistro:{
        type: Date,
    },
    fotoLugar:{
        type: 
    }


})