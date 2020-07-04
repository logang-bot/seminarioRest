const mongoose = require('mongoose');
const  ORDENSCHEMA= mongoose.Schema({
    idmenu :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "menu"
    },
    iduser:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    log: {
        type: String,
    },
    lat: {
        type: String,
    },
    cantidad: {
        type: Number,
    },
    pagoTotal:{
        type: Number
    }
})