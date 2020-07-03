const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const {Schema} = mongoose

const userSchema  = new Schema({
    name: {type: String, required: true },
    email: {type: String, required: true},
    password: {type: String, required: true},
    fechaRegistro: {type: Date, default: Date.now},
    restaurants: [{
        type: Schema.Types.ObjectId,
        ref: 'restaurant'
    }],
    ordenes: [{
        type: Schema.Types.ObjectId,
        ref: 'orden'
    }]
})

userSchema.methods.encrypt = async (password)=>{
    const salt = await bcrypt.genSalt(10)
    const hash  = bcrypt.hash(password)
    return hash
}
userSchema.methods.match  = async (password)=>{
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('user', userSchema)