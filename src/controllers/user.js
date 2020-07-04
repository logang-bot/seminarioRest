const ctrl  = {}
const {user} = require('../models')

ctrl.index = async (req,res)=>{
    const usrs  = await user.find({})
    res.status(200).json(usrs)
}

ctrl.signUp = async (req,res)=>{
    const{name, email, password, confirm_password} = req.body
    const errors=[]
    if(!name)errors.push({text: "el nombre es requerido"})
    if(!email)errors.push({text: "el email es necesario"})
    if(!password)errors.push({text: "password requerido"})
    if(password != confirm_password)errors.push({text: "el password no coincide"})

    if(errors.length>0) res.status(501).json(errors)
    else{
        const usr = await user.findOne({email: req.body.email})
        if(usr) res.send('el email ya esta en uso')
        else{
            const newuser  = await new user({name, email, password})
            newuser.password = await newuser.encrypt(password)
            await newuser.save()
            res.send('estas registrado')
            console.log(newuser)
        }
    }
}

module.exports = ctrl