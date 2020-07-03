const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const menuSchema  = new Schema({
    Nombre: {type: String, required: true}, 
    Precio: {type: Number}, 
    Descripción: {type: String}, 
    Fechaderegistro: {type: Date, default: Date.now}, 
    FotoP: {type: String, default: ""},
    Restau: {
        type: Schema.Types.ObjectId,
        ref: 'restaurant'
    },
    Cont:{
        type: Number,
        default: 0
    }
})

module.exports = require('mongoose').model('menu', menuSchema)