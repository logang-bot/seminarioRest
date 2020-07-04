const mongoose= require('mongoose');
const { restaurant } = require('.');
const RESTAURANTSCHEMA= new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre del restaurant es requerido"]
    },
    nit:{
        type: String,
        default: ""
    } ,
    propietario:{
        type: String,
        required: [true,"El nombre del propietario es requerido"]
    } ,
    calle: {
        type: String,
        required: [true, "La calle es requerida"]
    },
    telefono: {
        type: String
    },
    log: {
        type: String,
    },
    lat: {
        type: String,
    },
    logo:{
        type: String,
        default: ""
    },
    fechaRegistro:{
        type: Date,
        default: Date.now
    },
    fotoLugar:{
        type: String,
        default: ""
    },
    idPropietario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    menus:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "menu"
    }]
})

module.exports= mongoose.model("restaurant",RESTAURANTSCHEMA)